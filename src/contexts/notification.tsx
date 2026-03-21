"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CoinmecaWalletProvider } from "@coinmeca/wallet-sdk/provider";
import { Account, Chain, TransactionReceipt } from "@coinmeca/wallet-sdk/types";
import { parseChainId, valid } from "@coinmeca/wallet-sdk/utils";

const TRACK_TRANSACTION = "TRACK_TRANSACTION";
const CLEAR_TRACKED_TRANSACTIONS = "CLEAR_TRACKED_TRANSACTIONS";
const POLL_INTERVAL_MS = 5000;
const MAX_POLL_ATTEMPTS = 180;
const POLLING_OWNER_TTL_MS = POLL_INTERVAL_MS * 3;
const NOTIFICATION_EVENT_TTL_MS = 60000;
const PERMISSION_PROMPT_COOLDOWN_MS = 60000;
const PERMISSION_PROMPT_OWNER_TTL_MS = PERMISSION_PROMPT_COOLDOWN_MS;
const POLLING_OWNER_PREFIX = "coinmeca.wallet.notification.owner:";
const NOTIFICATION_EVENT_PREFIX = "coinmeca.wallet.notification.event:";
const PERMISSION_PROMPT_COOLDOWN_KEY = "coinmeca.wallet.notification.permission-cooldown";
const PERMISSION_PROMPT_OWNER_KEY = "coinmeca.wallet.notification.permission-owner";
const NOTIFICATION_CHANNEL = "coinmeca.wallet.notification";
const TRACKABLE_TX_HASH = /^0x[0-9a-f]{64}$/i;
const WORKER_PROTOCOL = "coinmeca.wallet.notification/v1";

type WorkerKind = "root" | "bundled";

type NotificationPermissionState = NotificationPermission | "unsupported";

type PendingTransaction = {
    hash: string;
    accountName: string;
    accountAddress: string;
    chainName: string;
    chainId: string;
    category: string;
    to: string;
    rpcUrl?: string;
    title: string;
    url: string;
};

type StorageOwnership = {
    owner: string;
    expiresAt: number;
};

type StorageEventState = {
    owner: string;
    at: number;
};

type NotificationChannelMessage =
    | { type: "scan" }
    | { type: "completed"; key: string };

const shortAddress = (address?: string) => {
    const value = typeof address === "string" ? address.trim() : "";
    return valid.address(value) ? `${value.slice(0, 6)}...${value.slice(-4)}` : value;
};

const transactionCategory = (value?: string) => {
    const category = typeof value === "string" ? value.trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ") : "";
    return category;
};

const notificationTitle = (category?: string) => {
    const value = transactionCategory(category);
    const normalized = value.toLowerCase();
    if (!normalized) return "Transaction Update";
    if (normalized.includes("approve")) return "Approval Update";
    if (normalized.includes("deploy")) return "Contract Deployment";
    if (normalized.includes("contract")) return "Contract Interaction";
    return `${value.charAt(0).toUpperCase()}${value.slice(1)} Update`;
};

const notificationAction = (category?: string) => {
    const value = transactionCategory(category).toLowerCase();
    if (!value) return "transaction";
    if (value.includes("approve")) return "approval";
    if (value.includes("deploy")) return "contract deployment";
    if (value.includes("contract")) return "contract interaction";
    return value;
};

const isTrackableTxHash = (value?: string) => typeof value === "string" && TRACKABLE_TX_HASH.test(value.trim());

const pendingKey = (address?: string, chainId?: number, hash?: string) => {
    if (!valid.address(address) || typeof chainId !== "number" || !isTrackableTxHash(hash)) return;
    return `${address!.trim().toLowerCase()}:${chainId}:${hash!.trim().toLowerCase()}`;
};

const isSecureNotificationContext = () => {
    if (typeof window === "undefined") return false;
    const host = typeof window.location?.hostname === "string" ? window.location.hostname.toLowerCase() : "";
    return window.isSecureContext || host === "localhost" || host === "127.0.0.1";
};

const notificationRpcUrl = (chain?: Chain) => {
    const urls = Array.isArray(chain?.rpcUrls)
        ? chain.rpcUrls
              .filter((value): value is string => typeof value === "string")
              .map((value) => value.trim())
              .filter((value) => value !== "")
        : [];
    for (const value of urls) {
        try {
            const protocol = new URL(value).protocol.toLowerCase();
            if (protocol === "http:" || protocol === "https:") return value;
        } catch {}
    }
    return;
};

const pendingTransaction = (account?: Account, chain?: Chain, chainId?: number, receipt?: TransactionReceipt): PendingTransaction | undefined => {
    const hash = typeof receipt?.hash === "string" ? receipt.hash.trim() : "";
    const accountAddress = typeof account?.address === "string" ? account.address.trim() : "";
    const category = transactionCategory(receipt?.category);
    const to = typeof receipt?.to === "string" ? receipt.to.trim() : "";
    if (!isTrackableTxHash(hash) || !valid.address(accountAddress) || typeof chainId !== "number") return;

    return {
        hash,
        accountName: typeof account?.name === "string" ? account.name.trim() : "",
        accountAddress,
        chainName: typeof chain?.chainName === "string" ? chain.chainName.trim() : "",
        chainId: chainId.toString(),
        category,
        to,
        rpcUrl: notificationRpcUrl(chain),
        title: notificationTitle(category),
        url:
            typeof window !== "undefined"
                ? `${window.location.pathname}${window.location.search}${window.location.hash}`
                : "/",
    };
};

const notificationMessage = (payload: PendingTransaction, status: "submitted" | "success" | "failure") => {
    const subject = [payload.chainName, payload.accountName || shortAddress(payload.accountAddress)]
        .filter((value) => typeof value === "string" && value.trim() !== "")
        .join(" / ");
    const prefix = subject ? `${subject}: ` : "";
    const shortHash = `${payload.hash.slice(0, 10)}...`;
    const action = notificationAction(payload.category);
    const target = valid.address(payload.to) ? ` to ${shortAddress(payload.to)}` : "";
    switch (status) {
        case "submitted":
            return `${prefix}${action}${target} submitted (${shortHash}).`;
        case "success":
            return `${prefix}${action}${target} confirmed (${shortHash}).`;
        default:
            return `${prefix}${action}${target} failed (${shortHash}).`;
    }
};

const notificationTargetUrl = (payload: PendingTransaction) => {
    if (typeof window === "undefined") return payload.url;

    try {
        const target = new URL(payload.url || "/", window.location.origin);
        if (isTrackableTxHash(payload.hash)) target.searchParams.set("tx", payload.hash.trim());
        if (valid.address(payload.accountAddress)) target.searchParams.set("address", payload.accountAddress.trim());
        if (valid.chainId(payload.chainId)) target.searchParams.set("chainId", payload.chainId.trim());
        if (typeof payload.rpcUrl === "string" && payload.rpcUrl.trim() !== "") target.searchParams.set("rpcUrl", payload.rpcUrl.trim());
        return target.toString();
    } catch {
        return window.location.href;
    }
};

const directNotification = (payload: PendingTransaction, status: "submitted" | "success" | "failure") => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    const targetUrl = notificationTargetUrl(payload);
    try {
        const notification = new Notification(payload.title, {
            body: notificationMessage(payload, status),
            tag: `tx:${payload.hash.toLowerCase()}:${status}`,
        });
        notification.onclick = () => {
            notification.close();
            if (window.location.href !== targetUrl) window.location.href = targetUrl;
            window.focus();
        };
    } catch {}
};

export const CoinmecaWalletNotificationBridge = ({ provider }: { provider?: CoinmecaWalletProvider }) => {
    const [permission, setPermission] = useState<NotificationPermissionState>("unsupported");
    const [isVisible, setIsVisible] = useState(true);
    const [permissionPromptPending, setPermissionPromptPending] = useState(false);
    const instanceIdRef = useRef(`coinmeca-wallet-notification:${Date.now()}:${Math.random().toString(36).slice(2)}`);
    const channelRef = useRef<BroadcastChannel | null>(null);
    const workerKindRef = useRef<WorkerKind>();
    const permissionStatusRef = useRef<PermissionStatus | null>(null);
    const permissionPromptAtRef = useRef(0);
    const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
    const initializedRef = useRef(false);
    const completedRef = useRef<Set<string>>(new Set());
    const pendingRef = useRef<Map<string, PendingTransaction>>(new Map());
    const pollersRef = useRef<Map<string, AbortController>>(new Map());
    const trackedRef = useRef<Set<string>>(new Set());

    const canNotify = permission === "granted";
    const useWorker = canNotify && !isVisible && !!registrationRef.current;

    const broadcast = useCallback((message: NotificationChannelMessage) => {
        try {
            channelRef.current?.postMessage(message);
        } catch {}
    }, []);

    const hasPendingTransactions = useCallback(() => pendingRef.current.size > 0, []);

    const storageRecord = useCallback((key: string): unknown => {
        if (typeof window === "undefined") return;
        try {
            const raw = window.localStorage.getItem(key);
            if (!raw) return;
            return JSON.parse(raw);
        } catch {
            return;
        }
    }, []);

    const setStorageRecord = useCallback((key: string, value: unknown) => {
        if (typeof window === "undefined") return false;
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    }, []);

    const removeStorageRecord = useCallback((key: string) => {
        if (typeof window === "undefined") return;
        try {
            window.localStorage.removeItem(key);
        } catch {}
    }, []);

    const sharedPermissionPromptAt = useCallback(() => {
        const current = storageRecord(PERMISSION_PROMPT_COOLDOWN_KEY) as StorageEventState | undefined;
        return typeof current?.at === "number" ? current.at : 0;
    }, [storageRecord]);

    const permissionPromptCooldownRemaining = useCallback(() => {
        const lastPromptAt = Math.max(permissionPromptAtRef.current, sharedPermissionPromptAt());
        if (!lastPromptAt) return 0;
        return Math.max(0, PERMISSION_PROMPT_COOLDOWN_MS - (Date.now() - lastPromptAt));
    }, [sharedPermissionPromptAt]);

    const markPermissionPromptCooldown = useCallback(() => {
        const now = Date.now();
        permissionPromptAtRef.current = now;
        setStorageRecord(PERMISSION_PROMPT_COOLDOWN_KEY, {
            owner: instanceIdRef.current,
            at: now,
        });
        return now;
    }, [setStorageRecord]);

    const claimPermissionPromptOwner = useCallback(() => {
        if (typeof window === "undefined") return true;
        const now = Date.now();
        const current = storageRecord(PERMISSION_PROMPT_OWNER_KEY) as StorageOwnership | undefined;
        if (current?.owner && current.owner !== instanceIdRef.current && current.expiresAt > now) return false;

        const next = {
            owner: instanceIdRef.current,
            expiresAt: now + PERMISSION_PROMPT_OWNER_TTL_MS,
        };
        if (!setStorageRecord(PERMISSION_PROMPT_OWNER_KEY, next)) return true;
        const confirmed = storageRecord(PERMISSION_PROMPT_OWNER_KEY) as StorageOwnership | undefined;
        return confirmed?.owner === instanceIdRef.current;
    }, [setStorageRecord, storageRecord]);

    const hasPermissionPromptOwner = useCallback(() => {
        const current = storageRecord(PERMISSION_PROMPT_OWNER_KEY) as StorageOwnership | undefined;
        return current?.owner === instanceIdRef.current && current.expiresAt > Date.now();
    }, [storageRecord]);

    const releasePermissionPromptOwner = useCallback(() => {
        const current = storageRecord(PERMISSION_PROMPT_OWNER_KEY) as StorageOwnership | undefined;
        if (current?.owner === instanceIdRef.current) removeStorageRecord(PERMISSION_PROMPT_OWNER_KEY);
    }, [removeStorageRecord, storageRecord]);

    const requestPermission = useCallback(() => {
        if (
            typeof window === "undefined" ||
            !("Notification" in window) ||
            !isSecureNotificationContext() ||
            permission !== "default" ||
            !isVisible ||
            !hasPendingTransactions()
        ) {
            return;
        }
        if (permissionPromptCooldownRemaining() > 0) return;
        markPermissionPromptCooldown();
        Notification.requestPermission()
            .then((next) => setPermission(next))
            .catch(() => undefined);
        releasePermissionPromptOwner();
    }, [
        hasPendingTransactions,
        isVisible,
        markPermissionPromptCooldown,
        permission,
        permissionPromptCooldownRemaining,
        releasePermissionPromptOwner,
    ]);

    const schedulePermissionRequest = useCallback(() => {
        if (
            typeof window === "undefined" ||
            !("Notification" in window) ||
            !isSecureNotificationContext() ||
            permission !== "default" ||
            !isVisible ||
            !hasPendingTransactions()
        ) {
            return;
        }
        if (permissionPromptCooldownRemaining() > 0) return;
        if (!claimPermissionPromptOwner()) return;
        setPermissionPromptPending(true);
    }, [claimPermissionPromptOwner, hasPendingTransactions, isVisible, permission, permissionPromptCooldownRemaining]);

    const claimPollingOwner = useCallback(
        (key: string) => {
            if (typeof window === "undefined") return true;
            const now = Date.now();
            const ownerKey = `${POLLING_OWNER_PREFIX}${key}`;
            const current = storageRecord(ownerKey) as StorageOwnership | undefined;
            if (current?.owner && current.owner !== instanceIdRef.current && current.expiresAt > now) return false;

            const next = {
                owner: instanceIdRef.current,
                expiresAt: now + POLLING_OWNER_TTL_MS,
            };
            if (!setStorageRecord(ownerKey, next)) return true;
            const confirmed = storageRecord(ownerKey) as StorageOwnership | undefined;
            return confirmed?.owner === instanceIdRef.current;
        },
        [setStorageRecord, storageRecord],
    );

    const releasePollingOwner = useCallback(
        (key: string) => {
            const ownerKey = `${POLLING_OWNER_PREFIX}${key}`;
            const current = storageRecord(ownerKey) as StorageOwnership | undefined;
            if (current?.owner === instanceIdRef.current) removeStorageRecord(ownerKey);
        },
        [removeStorageRecord, storageRecord],
    );

    const claimNotificationEvent = useCallback(
        (key: string, status: "submitted" | "success" | "failure") => {
            if (typeof window === "undefined") return true;
            const now = Date.now();
            const eventKey = `${NOTIFICATION_EVENT_PREFIX}${status}:${key}`;
            const current = storageRecord(eventKey) as StorageEventState | undefined;
            if (current?.at && now - current.at < NOTIFICATION_EVENT_TTL_MS) return false;

            const next = {
                owner: instanceIdRef.current,
                at: now,
            };
            if (!setStorageRecord(eventKey, next)) return true;
            const confirmed = storageRecord(eventKey) as StorageEventState | undefined;
            return confirmed?.owner === instanceIdRef.current;
        },
        [setStorageRecord, storageRecord],
    );

    const syncPermission = useCallback(() => {
        if (typeof window === "undefined" || !("Notification" in window) || !isSecureNotificationContext()) {
            setPermission("unsupported");
            return;
        }
        setPermission(Notification.permission);
    }, []);

    const syncVisibility = useCallback(() => {
        if (typeof document === "undefined") return;
        setIsVisible(document.visibilityState === "visible");
    }, []);

    const postWorkerMessage = useCallback(async (type: string, params?: Record<string, unknown>) => {
        if (typeof window === "undefined" || !("serviceWorker" in navigator)) return false;
        const registration = registrationRef.current;
        if (!registration) return false;

        let target = registration.active || registration.waiting || registration.installing;
        const controller = navigator.serviceWorker.controller;
        if (!target && controller && (controller === registration.active || controller === registration.waiting || controller === registration.installing)) {
            target = controller;
        }
        if (!target) {
            await new Promise<void>((resolve) => {
                let settled = false;
                const finish = () => {
                    if (settled) return;
                    settled = true;
                    navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
                    window.clearTimeout(timer);
                    resolve();
                };
                const handleControllerChange = () => finish();
                const timer = window.setTimeout(finish, 1500);
                navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange, { once: true });
            });
            target = registration.active || registration.waiting || registration.installing;
            const nextController = navigator.serviceWorker.controller;
            if (
                !target &&
                nextController &&
                (nextController === registration.active || nextController === registration.waiting || nextController === registration.installing)
            ) {
                target = nextController;
            }
        }

        if (!target) return false;
        target.postMessage({ type, protocol: WORKER_PROTOCOL, params });
        return true;
    }, []);

    const pingWorker = useCallback(async (registration: ServiceWorkerRegistration, expectedKind: WorkerKind) => {
        const target = registration.active || registration.waiting || registration.installing;
        if (!target) return false;

        return new Promise<WorkerKind | false>((resolve) => {
            const channel = new MessageChannel();
            const finish = (result: WorkerKind | false) => {
                window.clearTimeout(timer);
                channel.port1.onmessage = null;
                resolve(result);
            };
            const timer = window.setTimeout(() => finish(false), 1500);
            channel.port1.onmessage = (event) => {
                const kind =
                    event.data?.type === "COINMECA_WORKER_PONG" &&
                    event.data?.protocol === WORKER_PROTOCOL &&
                    event.data?.kind === expectedKind
                        ? expectedKind
                        : false;
                finish(kind);
            };

            try {
                target.postMessage({ type: "COINMECA_WORKER_PING", protocol: WORKER_PROTOCOL }, [channel.port2]);
            } catch {
                finish(false);
            }
        });
    }, []);

    const clearWorkerTracking = useCallback(
        (notify = true) => {
            trackedRef.current.clear();
            if (notify) void postWorkerMessage(CLEAR_TRACKED_TRANSACTIONS, {});
        },
        [postWorkerMessage],
    );

    const clearLocalPollers = useCallback(() => {
        pollersRef.current.forEach((controller, key) => {
            controller.abort();
            releasePollingOwner(key);
        });
        pollersRef.current.clear();
    }, [releasePollingOwner]);

    const markCompletedFromPeer = useCallback(
        (key: string) => {
            if (!key) return;
            completedRef.current.add(key);
            const poller = pollersRef.current.get(key);
            if (poller) {
                poller.abort();
                pollersRef.current.delete(key);
            }
            trackedRef.current.delete(key);
            releasePollingOwner(key);
        },
        [releasePollingOwner],
    );

    const resetTracking = useCallback(
        (notify = true) => {
            initializedRef.current = false;
            completedRef.current.clear();
            pendingRef.current.clear();
            setPermissionPromptPending(false);
            clearLocalPollers();
            clearWorkerTracking(notify);
            releasePermissionPromptOwner();
        },
        [clearLocalPollers, clearWorkerTracking, releasePermissionPromptOwner],
    );

    const fetchReceipt = useCallback(async (rpcUrl: string, txHash: string, signal: AbortSignal) => {
        try {
            const response = await fetch(rpcUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                signal,
                body: JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_getTransactionReceipt",
                    params: [txHash],
                    id: 1,
                }),
            });
            const json = await response.json();
            return json?.result;
        } catch {
            if (signal.aborted) return;
            return;
        }
    }, []);

    const delay = useCallback((ms: number, signal: AbortSignal) => {
        if (signal.aborted) return Promise.resolve();
        return new Promise<void>((resolve) => {
            const timer = window.setTimeout(() => {
                signal.removeEventListener("abort", handleAbort);
                resolve();
            }, ms);
            const handleAbort = () => {
                window.clearTimeout(timer);
                signal.removeEventListener("abort", handleAbort);
                resolve();
            };
            signal.addEventListener("abort", handleAbort, { once: true });
        });
    }, []);

    const syncResolvedReceipt = useCallback(
        (key: string, payload: PendingTransaction, receipt: any) => {
            if (!provider || completedRef.current.has(key)) return;
            const current = provider.getReceipt(payload.hash, {
                address: payload.accountAddress,
                chainId: payload.chainId,
            });
            const status = receipt?.status === "0x1" ? "success" : "failure";
            completedRef.current.add(key);
            broadcast({ type: "completed", key });
            if (claimNotificationEvent(key, status)) directNotification(payload, status);
            releasePollingOwner(key);
            try {
                provider.updateReceipt(
                    {
                        ...current,
                        hash: payload.hash,
                        chainId: payload.chainId,
                        to: typeof receipt?.to === "string" ? receipt.to : current?.to,
                        contractAddress: typeof receipt?.contractAddress === "string" ? receipt.contractAddress : current?.contractAddress,
                        blockNumber: receipt?.blockNumber ? Number(receipt.blockNumber) : current?.blockNumber,
                        gasUsed: receipt?.gasUsed ? Number(receipt.gasUsed) : current?.gasUsed,
                        cumulativeGasUsed: receipt?.cumulativeGasUsed ? Number(receipt.cumulativeGasUsed) : current?.cumulativeGasUsed,
                        effectiveGasPrice: receipt?.effectiveGasPrice ? Number(receipt.effectiveGasPrice) : current?.effectiveGasPrice,
                        status,
                    } as TransactionReceipt,
                    {
                        address: payload.accountAddress,
                        chainId: payload.chainId,
                    },
                );
            } catch {}
        },
        [broadcast, claimNotificationEvent, provider, releasePollingOwner],
    );

    const startLocalPolling = useCallback(
        (key: string, payload: PendingTransaction) => {
            if (!provider || !payload.rpcUrl || pollersRef.current.has(key) || !claimPollingOwner(key)) return;

            const controller = new AbortController();
            pollersRef.current.set(key, controller);

            void (async () => {
                try {
                    for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt += 1) {
                        if (controller.signal.aborted || !claimPollingOwner(key)) return;
                        const receipt = await fetchReceipt(payload.rpcUrl!, payload.hash, controller.signal);
                        if (receipt && typeof receipt?.status !== "undefined" && receipt?.status !== null) {
                            syncResolvedReceipt(key, payload, receipt);
                            return;
                        }
                        await delay(POLL_INTERVAL_MS, controller.signal);
                    }
                } finally {
                    if (pollersRef.current.get(key) === controller) pollersRef.current.delete(key);
                    releasePollingOwner(key);
                }
            })();
        },
        [claimPollingOwner, delay, fetchReceipt, provider, releasePollingOwner, syncResolvedReceipt],
    );

    const scanTransactions = useCallback(() => {
        if (!provider || provider.isLocked || permission === "denied" || permission === "unsupported") {
            resetTracking();
            return;
        }

        const chains = provider.chains || [];
        const accounts = provider.accounts() || [];
        const chainMap = new Map<number, Chain>();
        const nextPending = new Map<string, PendingTransaction>();
        const previousPending = pendingRef.current;
        const seeded = initializedRef.current;
        let hasPending = false;
        let hasNewPending = false;

        chains.forEach((chain: Chain) => {
            const chainId = typeof chain?.chainId !== "undefined" && valid.chainId(chain.chainId) ? parseChainId(chain.chainId) : undefined;
            if (typeof chainId === "number") chainMap.set(chainId, chain);
        });

        accounts.forEach((account: Account) => {
            const entries = Object.entries(account?.tx || {});
            entries.forEach(([chainId, receipts]) => {
                if (!Array.isArray(receipts)) return;
                const resolvedChainId = valid.chainId(chainId) ? parseChainId(chainId) : undefined;
                if (typeof resolvedChainId !== "number") return;
                const chain = chainMap.get(resolvedChainId);

                receipts.forEach((receipt: TransactionReceipt) => {
                    const key = pendingKey(account?.address, resolvedChainId, receipt?.hash);
                    if (!key) return;
                    const payload = pendingTransaction(account, chain, resolvedChainId, receipt);
                    if (!payload) return;

                    if (receipt?.status === "pending") {
                        hasPending = true;
                        nextPending.set(key, payload);
                        completedRef.current.delete(key);
                        if (seeded && !previousPending.has(key)) hasNewPending = true;
                        if (!canNotify) return;

                        if (
                            seeded &&
                            !previousPending.has(key) &&
                            (!useWorker || !payload.rpcUrl) &&
                            claimNotificationEvent(key, "submitted")
                        ) {
                            directNotification(payload, "submitted");
                        }

                        if (useWorker && payload.rpcUrl && !trackedRef.current.has(key)) {
                            trackedRef.current.add(key);
                            void postWorkerMessage(TRACK_TRANSACTION, {
                                ...payload,
                                url: workerKindRef.current === "root" ? "/activity" : payload.url,
                            });
                        }
                        if (!useWorker && payload.rpcUrl) startLocalPolling(key, payload);
                        return;
                    }

                    if (!canNotify) return;
                    const previous = previousPending.get(key);
                    if (
                        (receipt?.status === "success" || receipt?.status === "failure") &&
                        previous &&
                        !completedRef.current.has(key) &&
                        (!useWorker || !previous.rpcUrl)
                    ) {
                        completedRef.current.add(key);
                        broadcast({ type: "completed", key });
                        releasePollingOwner(key);
                        if (claimNotificationEvent(key, receipt.status)) directNotification(payload, receipt.status);
                    }
                });
            });
        });

        initializedRef.current = true;
        pendingRef.current = nextPending;

        if (!hasPending) {
            setPermissionPromptPending(false);
            releasePermissionPromptOwner();
        }

        if (!canNotify) {
            clearLocalPollers();
            clearWorkerTracking();
            if (hasPending && hasNewPending) schedulePermissionRequest();
            return;
        }

        trackedRef.current.forEach((key) => {
            if (!nextPending.has(key)) trackedRef.current.delete(key);
        });
        pollersRef.current.forEach((controller, key) => {
            if (useWorker || !nextPending.has(key)) {
                controller.abort();
                pollersRef.current.delete(key);
                releasePollingOwner(key);
            }
        });

        if (!useWorker) clearWorkerTracking();
    }, [
        broadcast,
        canNotify,
        claimNotificationEvent,
        clearLocalPollers,
        clearWorkerTracking,
        permission,
        postWorkerMessage,
        provider,
        releasePollingOwner,
        requestPermission,
        resetTracking,
        releasePermissionPromptOwner,
        schedulePermissionRequest,
        startLocalPolling,
        useWorker,
    ]);

    useEffect(() => {
        syncPermission();
        syncVisibility();

        if (typeof window === "undefined") return;

        window.addEventListener("focus", syncPermission);
        document.addEventListener("visibilitychange", syncPermission);
        document.addEventListener("visibilitychange", syncVisibility);

        return () => {
            window.removeEventListener("focus", syncPermission);
            document.removeEventListener("visibilitychange", syncPermission);
            document.removeEventListener("visibilitychange", syncVisibility);
        };
    }, [syncPermission, syncVisibility]);

    useEffect(() => {
        if (permission !== "default") {
            setPermissionPromptPending(false);
            releasePermissionPromptOwner();
        }
    }, [permission, releasePermissionPromptOwner]);

    useEffect(() => {
        if (isVisible || !permissionPromptPending) return;
        setPermissionPromptPending(false);
        releasePermissionPromptOwner();
    }, [isVisible, permissionPromptPending, releasePermissionPromptOwner]);

    useEffect(() => {
        if (!isVisible || permission !== "default" || permissionPromptPending || pendingRef.current.size === 0) return;

        const remaining = permissionPromptCooldownRemaining();
        if (remaining <= 0) {
            schedulePermissionRequest();
            return;
        }

        const timer = window.setTimeout(() => {
            schedulePermissionRequest();
        }, remaining + 1);

        return () => {
            window.clearTimeout(timer);
        };
    }, [isVisible, permission, permissionPromptPending, permissionPromptCooldownRemaining, schedulePermissionRequest]);

    useEffect(() => {
        if (
            typeof window === "undefined" ||
            !permissionPromptPending ||
            permission !== "default" ||
            !isVisible
        ) {
            return;
        }

        const requestFromInteraction = () => {
            if (!hasPendingTransactions()) {
                setPermissionPromptPending(false);
                releasePermissionPromptOwner();
                return;
            }
            if (!hasPermissionPromptOwner() && !claimPermissionPromptOwner()) {
                setPermissionPromptPending(false);
                return;
            }
            setPermissionPromptPending(false);
            requestPermission();
        };

        window.addEventListener("pointerdown", requestFromInteraction, { once: true });
        window.addEventListener("keydown", requestFromInteraction, { once: true });

        return () => {
            window.removeEventListener("pointerdown", requestFromInteraction);
            window.removeEventListener("keydown", requestFromInteraction);
        };
    }, [
        claimPermissionPromptOwner,
        hasPendingTransactions,
        hasPermissionPromptOwner,
        isVisible,
        permission,
        permissionPromptPending,
        releasePermissionPromptOwner,
        requestPermission,
    ]);

    useEffect(() => {
        if (
            typeof window === "undefined" ||
            !("Notification" in window) ||
            !isSecureNotificationContext() ||
            !("permissions" in navigator) ||
            typeof navigator.permissions?.query !== "function"
        ) {
            return;
        }

        let disposed = false;
        let status: PermissionStatus | null = null;
        const handleChange = () => syncPermission();

        void navigator.permissions
            .query({ name: "notifications" as PermissionName })
            .then((next) => {
                if (disposed) return;
                status = next;
                permissionStatusRef.current = next;
                if (typeof next.addEventListener === "function") next.addEventListener("change", handleChange);
                else next.onchange = handleChange;
                syncPermission();
            })
            .catch(() => undefined);

        return () => {
            disposed = true;
            if (!status) return;
            if (permissionStatusRef.current === status) permissionStatusRef.current = null;
            if (typeof status.removeEventListener === "function") status.removeEventListener("change", handleChange);
            else if (status.onchange === handleChange) status.onchange = null;
        };
    }, [syncPermission]);

    useEffect(() => {
        if (typeof window === "undefined" || typeof BroadcastChannel === "undefined") return;

        const channel = new BroadcastChannel(NOTIFICATION_CHANNEL);
        channelRef.current = channel;
        channel.onmessage = (event: MessageEvent<NotificationChannelMessage>) => {
            const data = event.data;
            if (!data || typeof data !== "object") return;

            if (data.type === "scan") {
                scanTransactions();
                return;
            }

            if (data.type === "completed" && typeof data.key === "string" && data.key) {
                markCompletedFromPeer(data.key);
            }
        };

        return () => {
            channel.close();
            if (channelRef.current === channel) channelRef.current = null;
        };
    }, [markCompletedFromPeer, scanTransactions]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const onStorage = (event: StorageEvent) => {
            const key = typeof event.key === "string" ? event.key : "";
            if (!key) return;

            if (key === PERMISSION_PROMPT_OWNER_KEY) {
                if (event.newValue) {
                    const current = storageRecord(PERMISSION_PROMPT_OWNER_KEY) as StorageOwnership | undefined;
                    if (current?.owner && current.owner !== instanceIdRef.current && permissionPromptPending) {
                        setPermissionPromptPending(false);
                    }
                    return;
                }
                if (!event.newValue && isVisible && permission === "default" && pendingRef.current.size > 0) {
                    schedulePermissionRequest();
                }
                return;
            }

            if (key === PERMISSION_PROMPT_COOLDOWN_KEY) {
                if (permissionPromptPending) setPermissionPromptPending(false);
                return;
            }

            if (key.startsWith(`${NOTIFICATION_EVENT_PREFIX}success:`) || key.startsWith(`${NOTIFICATION_EVENT_PREFIX}failure:`)) {
                const completedKey = key.replace(/^coinmeca\.wallet\.notification\.event:(success|failure):/, "");
                markCompletedFromPeer(completedKey);
                return;
            }

            if (key.startsWith(POLLING_OWNER_PREFIX) || key.startsWith(`${NOTIFICATION_EVENT_PREFIX}submitted:`)) {
                scanTransactions();
            }
        };

        window.addEventListener("storage", onStorage);
        return () => {
            window.removeEventListener("storage", onStorage);
        };
    }, [isVisible, markCompletedFromPeer, permission, permissionPromptPending, scanTransactions, schedulePermissionRequest, storageRecord]);

    useEffect(() => {
        if (typeof window === "undefined" || !("serviceWorker" in navigator) || !isSecureNotificationContext()) return;
        let disposed = false;

        const register = async () => {
            const candidates = ["/sw.js"];
            try {
                candidates.push(new URL("./notification-sw.js", import.meta.url).toString());
            } catch {}

            for (const script of candidates) {
                try {
                    const registration = await navigator.serviceWorker.register(script);
                    if (disposed) return;
                    const expectedKind: WorkerKind = script === "/sw.js" ? "root" : "bundled";
                    const kind = await pingWorker(registration, expectedKind);
                    if (!kind) continue;
                    registrationRef.current = registration;
                    workerKindRef.current = kind;
                    scanTransactions();
                    return;
                } catch {
                    continue;
                }
            }

            if (!disposed) {
                registrationRef.current = null;
                workerKindRef.current = undefined;
            }
        };

        void register();

        return () => {
            disposed = true;
        };
    }, [pingWorker, scanTransactions]);

    useEffect(() => {
        if (permission === "denied" || permission === "unsupported") resetTracking();
        else {
            scanTransactions();
            if (canNotify) broadcast({ type: "scan" });
        }
    }, [broadcast, canNotify, isVisible, permission, resetTracking, scanTransactions]);

    useEffect(() => {
        if (!provider) return;

        const update = () => {
            scanTransactions();
            broadcast({ type: "scan" });
        };
        const resetWorker = () => {
            clearWorkerTracking();
            update();
        };
        const resetAll = () => resetTracking();

        provider.on("lock", resetAll);
        provider.on("unlock", update);
        provider.on("chainUpdated", resetWorker);
        provider.on("txUpdated", update);
        provider.on("storageUpdated", update);
        provider.on("storageCleared", resetAll);

        return () => {
            provider.off("lock", resetAll);
            provider.off("unlock", update);
            provider.off("chainUpdated", resetWorker);
            provider.off("txUpdated", update);
            provider.off("storageUpdated", update);
            provider.off("storageCleared", resetAll);
        };
    }, [broadcast, clearWorkerTracking, provider, resetTracking, scanTransactions]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const cleanup = () => {
            resetTracking(false);
        };

        window.addEventListener("pagehide", cleanup);
        window.addEventListener("beforeunload", cleanup);

        return () => {
            window.removeEventListener("pagehide", cleanup);
            window.removeEventListener("beforeunload", cleanup);
        };
    }, [resetTracking]);

    useEffect(() => {
        return () => {
            resetTracking(false);
        };
    }, [resetTracking]);

    return null;
};

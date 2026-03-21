const TRACK_TRANSACTION = "TRACK_TRANSACTION";
const CLEAR_TRACKED_TRANSACTIONS = "CLEAR_TRACKED_TRANSACTIONS";
const POLL_INTERVAL_MS = 5000;
const MAX_POLL_ATTEMPTS = 180;
const TRACKABLE_TX_HASH = /^0x[0-9a-f]{64}$/i;
const TRACKABLE_ADDRESS = /^0x[0-9a-f]{40}$/i;
const TRACKABLE_CHAIN_ID = /^[0-9]+$/;
const trackedTransactions = new Map();
const WORKER_PROTOCOL = "coinmeca.wallet.notification/v1";
const WORKER_KIND = "bundled";

function normalizeCategory(value) {
    return typeof value === "string" ? value.trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ") : "";
}

function notificationTitle(category) {
    const value = normalizeCategory(category);
    const normalized = value.toLowerCase();
    if (!normalized) return "Transaction Update";
    if (normalized.includes("approve")) return "Approval Update";
    if (normalized.includes("deploy")) return "Contract Deployment";
    if (normalized.includes("contract")) return "Contract Interaction";
    return `${value.charAt(0).toUpperCase()}${value.slice(1)} Update`;
}

function notificationAction(category) {
    const value = normalizeCategory(category).toLowerCase();
    if (!value) return "transaction";
    if (value.includes("approve")) return "approval";
    if (value.includes("deploy")) return "contract deployment";
    if (value.includes("contract")) return "contract interaction";
    return value;
}

self.addEventListener("install", (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
    const { type, protocol, params } = event.data || {};
    if (type === "COINMECA_WORKER_PING") {
        if (protocol && protocol !== WORKER_PROTOCOL) return;
        event.ports?.[0]?.postMessage({ type: "COINMECA_WORKER_PONG", protocol: WORKER_PROTOCOL, kind: WORKER_KIND });
        return;
    }
    if (protocol && protocol !== WORKER_PROTOCOL) return;
    if (type === CLEAR_TRACKED_TRANSACTIONS) {
        event.waitUntil(clearTrackedTransactions());
        return;
    }
    if (type !== TRACK_TRANSACTION) return;

    const request = trackingRequest(params);
    if (!request) return;

    event.waitUntil(trackTransaction(request));
});

function trackingRequest(params) {
    if (!params || typeof params !== "object") return;

    const txHash = typeof params.txHash === "string" ? params.txHash.trim() : "";
    const rpcUrl = typeof params.rpcUrl === "string" ? params.rpcUrl.trim() : "";
    if (!isTrackableTxHash(txHash) || !isTrackableRpcUrl(rpcUrl)) return;

    const accountAddress = isTrackableAddress(params.accountAddress) ? params.accountAddress.trim() : "";
    const chainId = normalizeTrackableChainId(params.chainId);
    const category = normalizeCategory(params.category);
    const to = isTrackableAddress(params.to) ? params.to.trim() : "";

    return {
        txHash,
        rpcUrl,
        title: typeof params.title === "string" && params.title.trim() ? params.title.trim() : notificationTitle(category),
        accountName: typeof params.accountName === "string" && params.accountName.trim() ? params.accountName.trim() : "",
        accountAddress,
        chainName: typeof params.chainName === "string" && params.chainName.trim() ? params.chainName.trim() : "",
        chainId,
        category,
        to,
        url: typeof params.url === "string" && params.url.trim() ? params.url.trim() : "/",
    };
}

function trackingKey({ txHash, rpcUrl }) {
    return `${rpcUrl}:${txHash.toLowerCase()}`;
}

async function trackTransaction(request) {
    const key = trackingKey(request);
    if (trackedTransactions.has(key)) return;

    const controller = new AbortController();
    trackedTransactions.set(key, controller);

    try {
        for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt += 1) {
            if (controller.signal.aborted) return;

            const receipt = await fetchReceipt(request.rpcUrl, request.txHash, controller.signal);
            if (receipt && typeof receipt.status !== "undefined" && receipt.status !== null) {
                await showTrackedNotification(request, receipt);
                return;
            }

            await delay(POLL_INTERVAL_MS, controller.signal);
        }
    } finally {
        trackedTransactions.delete(key);
    }
}

async function clearTrackedTransactions() {
    trackedTransactions.forEach((controller) => controller.abort());
    trackedTransactions.clear();
}

async function fetchReceipt(rpcUrl, txHash, signal) {
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
        return json.result;
    } catch {
        if (signal?.aborted) return;
        return;
    }
}

async function showTrackedNotification(request, receipt) {
    const success = receipt.status === "0x1";
    const shortHash = `${request.txHash.slice(0, 10)}...`;
    const subject = [request.chainName, request.accountName || shortAddress(request.accountAddress)]
        .filter((value) => typeof value === "string" && value.trim() !== "")
        .join(" / ");
    const prefix = subject ? `${subject}: ` : "";
    const action = notificationAction(request.category);
    const target = isTrackableAddress(request.to) ? ` to ${shortAddress(request.to)}` : "";

    await self.registration.showNotification(request.title, {
        body: `${prefix}${action}${target} ${success ? "confirmed" : "failed"} (${shortHash}).`,
        tag: `tx:${request.txHash.toLowerCase()}`,
        data: {
            url: trackingUrl(request.url, request.txHash, request.accountAddress, request.chainId, request.rpcUrl),
        },
    });
}

function shortAddress(address) {
    const value = typeof address === "string" ? address.trim() : "";
    return value.startsWith("0x") && value.length > 12 ? `${value.slice(0, 6)}...${value.slice(-4)}` : value;
}

function isTrackableTxHash(value) {
    return typeof value === "string" && TRACKABLE_TX_HASH.test(value.trim());
}

function isTrackableAddress(value) {
    return typeof value === "string" && TRACKABLE_ADDRESS.test(value.trim());
}

function normalizeTrackableChainId(value) {
    if (typeof value === "number" && Number.isInteger(value) && value >= 0) return value.toString();
    if (typeof value === "string" && TRACKABLE_CHAIN_ID.test(value.trim())) return value.trim();
    return "";
}

function isTrackableRpcUrl(value) {
    try {
        const protocol = new URL(value.trim()).protocol.toLowerCase();
        return ["http:", "https:"].includes(protocol);
    } catch {
        return false;
    }
}

function normalizeUrl(url) {
    try {
        return new URL(url || "/", self.location.origin).toString();
    } catch {
        return new URL("/", self.location.origin).toString();
    }
}

function trackingUrl(url, txHash, address, chainId, rpcUrl) {
    const target = new URL(normalizeUrl(url));
    if (isTrackableTxHash(txHash)) target.searchParams.set("tx", txHash.trim());
    if (isTrackableAddress(address)) target.searchParams.set("address", address.trim());
    if (typeof chainId === "string" && TRACKABLE_CHAIN_ID.test(chainId.trim())) target.searchParams.set("chainId", chainId.trim());
    if (typeof rpcUrl === "string" && isTrackableRpcUrl(rpcUrl)) target.searchParams.set("rpcUrl", rpcUrl.trim());
    return target.toString();
}

function delay(ms, signal) {
    if (signal?.aborted) return Promise.resolve();
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            signal?.removeEventListener("abort", handleAbort);
            resolve();
        }, ms);

        const handleAbort = () => {
            clearTimeout(timer);
            signal?.removeEventListener("abort", handleAbort);
            resolve();
        };

        signal?.addEventListener("abort", handleAbort, { once: true });
    });
}

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    const targetUrl = normalizeUrl(event.notification.data && event.notification.data.url);

    event.waitUntil(
        self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(async (windows) => {
            for (const client of windows) {
                const current = typeof client.url === "string" ? client.url : "";
                if (!current || !current.startsWith(self.location.origin)) continue;
                if ("navigate" in client && current !== targetUrl) await client.navigate(targetUrl);
                if ("focus" in client) return client.focus();
                return client;
            }
            return self.clients.openWindow(targetUrl);
        }),
    );
});

"use client";

import Script from "next/script";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import CryptoJS from "crypto-js";

export const encrypt = (data?: string, salt?: string): string | undefined => {
    if (!data || !salt) return data;
    return CryptoJS.AES.encrypt(data, CryptoJS.SHA256(salt), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    }).toString();
};

export const decrypt = (data?: string | null, salt?: string): string | undefined => {
    if (!data) return undefined;
    else if (!salt) return data;
    return CryptoJS.AES.decrypt(data, CryptoJS.SHA256(salt), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
};

export const format = (value?: any): string | undefined => {
    if (!value || typeof value === "undefined") return value;
    if (typeof value === "boolean" || typeof value === "number") return value.toString();
    return JSON.stringify(value);
};

export const parse = (value?: string): any => {
    if (!value || typeof value === "undefined") return value;
    if (value === "true" || value === "false") return value === "true";
    if (/^[0-9]*\.[0-9]+$/.test(value)) return parseFloat(value);
    return JSON.parse(value);
};

export interface StorageController {
    get: (key: string) => any;
    gets: (keys: string[]) => Record<string, any>;
    getAll: () => Record<string, any>;
    set: (key: string, value: any) => void;
    sets: (map: string[][]) => void;
    remove: (key: string) => void;
    removes: (keys: string[]) => void;
    clear: () => void;
}

export const loadStorage = (prefix: string, storage?: CloudStorage | Storage, isTelegram?: boolean, salt?: string): StorageController => ({
    get: (key: string) => {
        return parse(decrypt(storage?.getItem(encrypt(`${prefix}:${key}`, salt)!) as string, salt));
    },
    gets: (keys: string[]) => {
        const values: Record<string, any> = {};
        if (isTelegram) {
            const items = storage?.getItems(keys?.map((k) => encrypt(`${prefix}:${k}`, salt))) as string[];
            items.forEach((v: string | undefined, i: number) => {
                if (v) values[keys[i]] = parse(decrypt(v, salt));
            });
        } else {
            keys.forEach((key) => {
                const value = storage?.getItem(encrypt(`${prefix}:${key}`, salt)!) as string;
                if (value) values[key] = parse(decrypt(value, salt));
            });
        }
        return values;
    },
    getAll: () => {
        const values: Record<string, any> = {};
        if (isTelegram) {
            const keys = storage?.getKeys() as any;
            const items = storage?.getItems(keys?.map((k: string) => decrypt(k, salt))) as any;
            items.forEach((v: string | undefined, i: number) => {
                if (v) values[keys[i].replace(`${prefix}:`, "")] = parse(decrypt(v, salt));
            });
        } else {
            if ((storage as Storage)?.length)
                for (let i = 0; i < (storage as Storage).length; i++) {
                    const key = decrypt((storage as Storage)?.key(i), salt);
                    if (key && key.startsWith(`${prefix}:`)) {
                        const value = storage?.getItem(key) as string;
                        if (value) values[key.replace(`${prefix}:`, "")] = parse(decrypt(value, salt));
                    }
                }
        }
        return values;
    },
    set: (key: string, value: any) => {
        value = encrypt(format(value), salt);
        return value && storage?.setItem(encrypt(`${prefix}:${key}`, salt)!, value as string);
    },
    sets: (map: string[][]) => {
        return (
            map &&
            Array.isArray(map) &&
            Array?.isArray(map?.[0]) &&
            map?.map((item) => {
                if (item?.[0] && item?.[1]) {
                    const value = encrypt(format(item[1]), salt);
                    if (value) storage?.setItem(encrypt(`${prefix}:${item[0]}`, salt)!, value as any);
                }
            })
        );
    },
    remove: (key: string) => {
        return storage?.removeItem(encrypt(`${prefix}:${key}`, salt)!);
    },
    removes: (keys: string[]) => {
        if (isTelegram) {
            storage?.removeItems(keys?.map((k) => encrypt(`${prefix}:${k}`, salt)));
        } else {
            keys.forEach((key) => localStorage.removeItem(encrypt(`${prefix}:${key}`, salt)!));
        }
    },
    clear: () => {
        try {
            return isTelegram ? storage?.removeItems(storage?.getKeys()?.map((k: string) => encrypt(k, salt)) as any) : (storage as Storage)?.clear();
        } catch (e) {
            console.error(e);
        }
    },
});

export interface TelegramController {
    telegram: Telegram["WebApp"] | undefined;
    user: Telegram["WebApp"]["initDataUnsafe"]["user"] | undefined;
    isInApp?: boolean;
    isExpanded?: boolean;
    isVerticalSwipe?: boolean;
    isCloseConfirm?: boolean;
    storage?: CloudStorage;
    send: (text: string) => void | undefined;
    enable: {
        vertical: () => void | undefined;
        closeConfirm: () => void | undefined;
    };
    disable: {
        vertical: () => void | undefined;
        closeConfirm: () => void | undefined;
    };
    bio: {
        request: (reason?: string) => BiometricManager | undefined;
        auth: (reason?: string) => BiometricManager | undefined;
    };
    show: {
        alert: (message: string, callback?: () => void) => void | undefined;
        confirm: (title: string, callback?: (ok: boolean) => void) => void | undefined;
        popup: (popup: PopupParams, callback?: ((button_id: string) => void) | undefined) => void | undefined;
        scanQR: (text: string, callback?: (data: string) => void) => void | undefined;
    };
    open: {
        internal: (url: string, callback?: Function) => void;
        external: (url: string, try_instant_view?: boolean, callback?: Function) => void;
    };
    expand: (callback?: Function) => void;
    exit: (callback?: Function) => void;
}

export const loadTelegram = (telegram?: Telegram["WebApp"]): TelegramController => ({
    telegram,
    user: telegram?.initDataUnsafe?.user,
    isInApp: telegram && telegram?.platform !== "unknown",
    isExpanded: telegram?.isExpanded || false,
    isVerticalSwipe: telegram?.isVerticalSwipesEnabled,
    isCloseConfirm: telegram?.isClosingConfirmationEnabled,

    storage: telegram?.CloudStorage,

    send: (text: string) => telegram && telegram?.sendData(text),

    enable: {
        vertical: () => telegram?.enableVerticalSwipes?.(),
        closeConfirm: () => telegram?.enableClosingConfirmation?.(),
    },

    disable: {
        vertical: () => telegram?.disableVerticalSwipes?.(),
        closeConfirm: () => telegram?.disableClosingConfirmation?.(),
    },

    bio: {
        request: (reason?: string) => telegram && telegram.BiometricManager.requestAccess({ reason }),
        auth: (reason?: string) => telegram && telegram.BiometricManager.authenticate({ reason }),
    },

    show: {
        alert: (message: string, callback?: () => void) => telegram && telegram?.showAlert(message, callback),
        confirm: (title: string, callback?: (ok: boolean) => void) => telegram && telegram?.showConfirm(title, callback),
        popup: (popup: PopupParams, callback?: ((button_id: string) => void) | undefined) => telegram && telegram?.showPopup(popup, callback),
        scanQR: (text: string, callback?: (data: string) => void) => telegram && telegram?.showScanQrPopup({ text }, callback),
    },

    open: {
        internal: (url: string, callback?: Function) => {
            if (telegram) {
                telegram?.openTelegramLink(url);
                callback?.();
            }
        },
        external: (url: string, try_instant_view?: boolean, callback?: Function) => {
            if (telegram) {
                telegram?.openLink(url, { try_instant_view });
                callback?.();
            }
        },
    },

    expand: (callback?: Function) => {
        if (telegram) {
            telegram?.expand();
            callback?.();
        }
    },

    exit: (callback?: Function) => {
        if (telegram) {
            telegram?.close();
            telegram?.MainButton?.offClick(() => {
                callback?.();
            });
        }
    },
});

const TelegramContext = createContext<TelegramController | undefined>(undefined);

export const useTelegram = () => {
    const context = useContext(TelegramContext);
    if (!context) throw new Error("useTelegram must be used within a TelegramProvider");
    return context;
};

export const TelegramProvider: React.FC<{ src?: string; children?: React.ReactNode }> = ({ src = "https://telegram.org/js/telegram-web-app.js", children }) => {
    const [telegram, setTelegram] = useState<Telegram["WebApp"]>();
    const [user, setUser] = useState<Telegram["WebApp"]["initDataUnsafe"]["user"]>();

    const onLoad = () => {
        const telegram: Telegram["WebApp"] = typeof window !== "undefined" ? (window as any).Telegram?.WebApp || (window as any).Telegram?.WebView : undefined;
        if (telegram) {
            telegram.ready();
            // Assuming BiometricManager exists and has an init method
            if (telegram.BiometricManager) telegram.BiometricManager.init();
            telegram.enableVerticalSwipes();
            setTelegram(telegram);
            setUser(telegram.initDataUnsafe?.user);
        }
    };

    const modules = useMemo(() => loadTelegram(telegram), [telegram]);

    useEffect(() => {
        if (telegram) {
            // Define a cleanup function that does not return a value
            return () => {
                if (telegram?.MainButton) telegram?.MainButton?.offClick(() => setUser(undefined));
            };
        }
    }, [telegram]);

    return (
        <>
            <Script src={src} onLoad={onLoad} />
            <TelegramContext.Provider
                value={{
                    ...{
                        ...modules,
                        exit: (callback?: Function) => {
                            modules.exit(callback);
                            setUser(undefined);
                        },
                    },
                    telegram,
                    user,
                }}>
                {children}
            </TelegramContext.Provider>
        </>
    );
};

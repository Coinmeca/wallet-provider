"use client";

import React, { createContext, useContext, useLayoutEffect, useState } from "react";
import { CoinmecaWalletProvider } from "@coinmeca/wallet-sdk/provider";
import { Account, App, Chain, TransactionReceipt, Contact } from "@coinmeca/wallet-sdk/types";
import { TelegramProvider } from "./telegram";

interface CoinmecaWalletProviderContextProps {
    provider: CoinmecaWalletProvider | undefined;
    account: Account | undefined;
    accounts: Account[] | undefined;
    chain: Chain | undefined;
    chains: Chain[] | undefined;
    apps: App[] | undefined;
    tokens: {
        fungibles?: string[];
        nonFungibles?: { [address: string]: string[] }[];
        multiTokens?: string[];
    };
    tx: TransactionReceipt[] | undefined;
    contact: Contact;
}

const CoinmecaWalletContext = createContext<CoinmecaWalletProviderContextProps | undefined>(undefined);

export const useCoinmecaWalletProvider = () => {
    const context = useContext(CoinmecaWalletContext);
    if (!context)
        throw new Error("CoinmecaWalletContext is not initialized yet. Ensure the provider is correctly set up before using useCoinmecaWalletProvider.");
    return context;
};

export const CoinmecaWalletContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [provider, setProvider] = useState<CoinmecaWalletProvider>();
    const [, setUpdate] = useState(0);
    const updates = () => setUpdate((_) => _ + 1);

    useLayoutEffect(() => {
        const sessionId = new Date().toJSON();
        const chainId = (window as any)?.coinmeca?.request?.chainId;
        const provider = (window as any)?.coinmeca?.wallet || new CoinmecaWalletProvider({ chainId, sessionId });
        setProvider(provider);

        const updateStorage = (event: StorageEvent) => {
            if (event.storageArea === localStorage) updates();
        };
        window.addEventListener("storage", updateStorage);
        return () => {
            window.removeEventListener("storage", updateStorage);
        };
    }, []);

    useLayoutEffect(() => {
        if (provider) {
            provider?.on("lock", updates);
            provider?.on("unlock", updates);
            provider?.on("lockTimeUpdated", updates);
            provider?.on("accountChanged", updates);
            provider?.on("accountUpdated", updates);
            provider?.on("chainChanged", updates);
            provider?.on("chainUpdated", updates);
            provider?.on("appUpdated", updates);
            provider?.on("tokenUpdated", updates);
            provider?.on("nftUpdated", updates);
            provider?.on("nftUpdated", updates);
            provider?.on("txUpdated", updates);
            provider?.on("storageUpdated", updates);
            provider?.on("storageCleared", updates);

            return () => {
                provider?.off("lock", updates);
                provider?.off("unlock", updates);
                provider?.off("lockTimeUpdated", updates);
                provider?.off("accountChanged", updates);
                provider?.off("accountUpdated", updates);
                provider?.off("chainChanged", updates);
                provider?.off("chainUpdated", updates);
                provider?.off("appUpdated", updates);
                provider?.off("tokenUpdated", updates);
                provider?.off("nftUpdated", updates);
                provider?.off("nftUpdated", updates);
                provider?.off("txUpdated", updates);
                provider?.off("storageUpdated", updates);
                provider?.off("storageCleared", updates);
            };
        }
    }, [provider]);

    const chain = provider?.chain;
    const chainId = chain?.chainId?.toString() || "";
    const account = provider?.account();

    return (
        <TelegramProvider>
            <CoinmecaWalletContext.Provider
                value={{
                    provider,
                    account,
                    accounts: provider?.accounts() as Account[],
                    chain,
                    chains: provider?.chains,
                    apps: provider?.apps,
                    tokens: {
                        fungibles: chainId ? account?.tokens?.fungibles?.[chainId] : undefined,
                        nonFungibles: chainId ? account?.tokens?.nonFungibles?.[chainId] : undefined,
                        multiTokens: chainId ? account?.tokens?.multiTokens?.[chainId] : undefined,
                    },
                    tx: account?.tx?.[chainId || ""],
                    contact: provider?.contact,
                }}>
                {children}
            </CoinmecaWalletContext.Provider>
        </TelegramProvider>
    );
};

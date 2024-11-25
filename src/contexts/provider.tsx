"use client";

import { CoinmecaWalletProvider } from "@coinmeca/wallet-sdk/provider";
import { Account, App, Chain, TransactionReceipt } from "@coinmeca/wallet-sdk/types";
import React, { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";

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
}

const CoinmecaWalletContext = createContext<CoinmecaWalletProviderContextProps | undefined>(undefined);

export const useCoinmecaWalletProvider = () => {
    const context = useContext(CoinmecaWalletContext);
    if (!context) throw new Error("InjectedWalletContext for useInjectedWallet doesn't initialized yet.");
    return context;
};

export const CoinmecaWalletContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [provider, setProvider] = useState<CoinmecaWalletProvider>();
    const [updates,setUpdate] = useState<number>(0);
    const update = () => setUpdate((n) => n + 1);

    useLayoutEffect(() => {
        const sessionId = new Date().toJSON();
        const chainId = (window as any)?.coinmeca?.request?.chainId;
        const provider = (window as any)?.coinmeca?.wallet || new CoinmecaWalletProvider({ chainId, sessionId });
        setProvider(provider);

        const updateStorage = (event: StorageEvent) => {
            if (event.storageArea === localStorage) setUpdate((n) => n + 1)
        };
        window.addEventListener("storage", updateStorage);
        return () => {
            window.removeEventListener("storage", updateStorage);
        };
    }, []);

    useLayoutEffect(() => {
        if (provider) {
            provider?.on("unlock", update);
            provider?.on("accountChanged", update);
            provider?.on("accountUpdated", update);
            provider?.on("chainChanged", update);
            provider?.on("chainUpdated", update);
            provider?.on("appUpdated", update);
            provider?.on("tokenUpdated", update);
            provider?.on("nftUpdated", update);
            provider?.on("nftUpdated", update);
            provider?.on("txUpdated", update);

            return () => {
                provider?.off("unlock", update);
                provider?.off("accountChanged", update);
                provider?.off("accountUpdated", update);
                provider?.off("chainChanged", update);
                provider?.off("chainUpdated", update);
                provider?.off("appUpdated", update);
                provider?.off("tokenUpdated", update);
                provider?.off("nftUpdated", update);
                provider?.off("nftUpdated", update);
                provider?.off("txUpdated", update);
            };
        }
    }, [provider]);

    const chain = provider?.chain;
    const account = provider?.account();

    return (
        <CoinmecaWalletContext.Provider
            value={{
                provider,
                account,
                chain: provider?.chain,
                accounts: provider?.accounts() as Account[],
                chains: provider?.chains,
                apps: provider?.apps,
                tokens: {
                    fungibles: chain?.chainId ? account?.tokens?.fungibles?.[`${chain?.chainId}`] : undefined,
                    nonFungibles: chain?.chainId ? account?.tokens?.nonFungibles?.[`${chain?.chainId}`] : undefined,
                    multiTokens: chain?.chainId ? account?.tokens?.multiTokens?.[`${chain?.chainId}`] : undefined,
                },
                tx: account?.tx?.[chain?.chainId || ""],
            }}>
            {children}
        </CoinmecaWalletContext.Provider>
    );
};

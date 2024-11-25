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

    const [account, setAccount] = useState<Account>();
    const [chain, setChain] = useState<Chain>();
    const [fungibles, setFungibles] = useState<any>();

    useLayoutEffect(() => {
        const sessionId = new Date().toJSON();
        const chainId = (window as any)?.coinmeca?.request?.chainId;
        const provider = (window as any)?.coinmeca?.wallet || new CoinmecaWalletProvider({ chainId, sessionId });
        setProvider(provider);
    }, []);

    useLayoutEffect(() => {
        if (provider) {
            const updateAccount = () => {
                setAccount(provider?.account());
            };

            const updateChain = () => {
                setChain(provider?.chain);
            };

            const updateFungibles = () => {};

            const update = () => {
                updateAccount();
                updateChain();
            };

            provider?.on("unlock", update);
            provider?.on("accountChanged", updateAccount);
            provider?.on("accountEdited", updateAccount);
            provider?.on("chainChanged", updateChain);
            provider?.on("tokenUpdated", updateFungibles);
            return () => {
                provider?.off("unlock", update);
                provider?.off("accountChanged", updateAccount);
                provider?.off("accountEdited", updateAccount);
                provider?.off("chainChanged", updateChain);
                provider?.off("tokenUpdated", updateFungibles);
            };
        }
    }, [provider]);

    const tokens = useMemo(
        () => ({
            fungibles: chain?.chainId ? account?.tokens?.fungibles?.[`${chain?.chainId}`] : undefined,
            nonFungibles: chain?.chainId ? account?.tokens?.nonFungibles?.[`${chain?.chainId}`] : undefined,
            multiTokens: chain?.chainId ? account?.tokens?.multiTokens?.[`${chain?.chainId}`] : undefined,
        }),
        [provider, chain],
    );
    const apps = useMemo(() => provider?.apps, [provider?.apps]);
    const tx = useMemo(() => account?.tx?.[chain?.chainId || ""], [account?.tx, chain?.chainId]);

    return (
        <CoinmecaWalletContext.Provider
            value={{
                provider,
                account,
                chain,
                accounts: provider?.accounts() as Account[],
                chains: provider?.chains,
                apps,
                tokens,
                tx,
            }}>
            {children}
        </CoinmecaWalletContext.Provider>
    );
};

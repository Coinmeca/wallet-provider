"use client";

import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Chain } from "@coinmeca/wallet-sdk/types";
import { CoinmecaWalletAdapter, CoinmecaWalletAdapterConfig } from "@coinmeca/wallet-sdk/adapter";

interface CoinmecaWalletAdapterContextProps {
    adapter: CoinmecaWalletAdapter | undefined;
    address: string | undefined;
    chain: Chain | undefined;
}

const CoinmecaWalletAdapterContext = createContext<CoinmecaWalletAdapterContextProps | undefined>(undefined);

export const useCoinmecaWallet = () => {
    const context = useContext(CoinmecaWalletAdapterContext);
    if (!context) throw new Error("CoinmecaWalletAdapterContext is not initialized. Ensure the provider is set up correctly before using useCoinmecaWallet.");
    return context;
};

export const CoinmecaWalletAdapterContextProvider: React.FC<{ config?: CoinmecaWalletAdapterConfig; children?: React.ReactNode }> = ({ config, children }) => {
    const [adapter, setAdapter] = useState<CoinmecaWalletAdapter>();
    const [updates, setUpdate] = useState(false);
    const update = () => setUpdate((_) => !_);

    const address = adapter?.address;
    const chain = adapter?.chain;

    useLayoutEffect(() => {
        setAdapter((window as any)?.ethereum?.providerMap?.get("CoinmecaWallet") || new CoinmecaWalletAdapter(config));

        const updateStorage = (event: StorageEvent) => {
            if (event.storageArea === localStorage) update();
        };
        window.addEventListener("storage", updateStorage);
        return () => {
            window.removeEventListener("storage", updateStorage);
        };
    }, []);

    useEffect(() => {
        adapter?.on("accountChanged", update);
        adapter?.on("chainChanged", update);

        return () => {
            adapter?.off("accountChanged", update);
            adapter?.off("chainChanged", update);
        };
    }, [adapter]);

    return <CoinmecaWalletAdapterContext.Provider value={{ adapter, address, chain }}>{children}</CoinmecaWalletAdapterContext.Provider>;
};

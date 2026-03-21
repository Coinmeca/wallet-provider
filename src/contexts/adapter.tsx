"use client";

import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { Chain } from "@coinmeca/wallet-sdk/types";
import { CoinmecaWalletAdapter, CoinmecaWalletAdapterConfig } from "@coinmeca/wallet-sdk/adapter";
import { formatChainId, valid } from "@coinmeca/wallet-sdk/utils";
import { TelegramProvider } from "./telegram";

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
    const evented = (value?: any): value is CoinmecaWalletAdapter =>
        !!value && typeof value === "object" && typeof value?.request === "function" && typeof value?.on === "function" && typeof value?.off === "function";
    const find = () => {
        const ethereum = (window as any)?.ethereum;
        const injected = ethereum?.providerMap?.get?.("CoinmecaWallet");
        if (evented(injected)) return injected;

        const provider = ethereum?.providers?.find?.((item: any) => item?.isCoinmecaWallet && evented(item));
        if (evented(provider)) return provider;

        return evented(ethereum) && ethereum?.isCoinmecaWallet ? ethereum : undefined;
    };

    const address = adapter?.address;
    const adapterChain = adapter?.chain;
    const adapterChainId = adapter?.chainId;
    const chain =
        adapterChain &&
        adapterChainId &&
        valid.chainId(adapterChain?.chainId) &&
        formatChainId(adapterChain.chainId) === adapterChainId
            ? adapterChain
            : undefined;

    useLayoutEffect(() => {
        setAdapter(find() || new CoinmecaWalletAdapter(config));

        const updateStorage = (event: StorageEvent) => {
            if (event.storageArea === localStorage) update();
        };
        window.addEventListener("storage", updateStorage);
        return () => {
            window.removeEventListener("storage", updateStorage);
        };
    }, []);

    useEffect(() => {
        if (!evented(adapter)) return;
        adapter.on("accountChanged", update);
        adapter.on("chainChanged", update);

        return () => {
            adapter.off("accountChanged", update);
            adapter.off("chainChanged", update);
        };
    }, [adapter]);

    return (
        <TelegramProvider>
            <CoinmecaWalletAdapterContext.Provider value={{ adapter, address, chain }}>{children}</CoinmecaWalletAdapterContext.Provider>
        </TelegramProvider>
    );
};

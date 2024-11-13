"use client";
import { StrictMode } from "react";
import { CoinmecaWalletContextProvider, CoinmecaWalletAdapterContextProvider } from "../contexts";

export default function Providers({ children }: { children: any }) {
    return (
        <StrictMode>
            <CoinmecaWalletContextProvider>
                <CoinmecaWalletAdapterContextProvider>{children}</CoinmecaWalletAdapterContextProvider>
            </CoinmecaWalletContextProvider>
        </StrictMode>
    );
}

"use client";
import { StrictMode } from "react";
import { CoinmecaWalletContextProvider } from "@coinmeca/wallet-provider/provider";

export default function Providers({ children }: { children: any }) {
    return (
        <StrictMode>
            <CoinmecaWalletContextProvider>{children}</CoinmecaWalletContextProvider>
        </StrictMode>
    );
}

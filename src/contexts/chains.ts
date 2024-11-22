import { Chain, Chains } from "@coinmeca/wallet-sdk/types";

export const chainlist: Chains = {
    ethereum: {
        mainnet: {
            chainId: 1,
            base: "evm",
            chainName: "Ethereum",
            logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzIxMl8yNzYwKSI+CjxwYXRoIGQ9Ik0xMjUwIDI1MDBDMTk0MC4zNiAyNTAwIDI1MDAgMTk0MC4zNiAyNTAwIDEyNTBDMjUwMCA1NTkuNjQ0IDE5NDAuMzYgMCAxMjUwIDBDNTU5LjY0NCAwIDAgNTU5LjY0NCAwIDEyNTBDMCAxOTQwLjM2IDU1OS42NDQgMjUwMCAxMjUwIDI1MDBaIiBmaWxsPSIjNjI3RUVBIi8+CjxwYXRoIGQ9Ik0xMjg4LjkxIDMxMi41VjEwMDUuNDdMMTg3NC42MSAxMjY3LjE5TDEyODguOTEgMzEyLjVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMTI4OC45MSAzMTIuNUw3MDMuMTI1IDEyNjcuMTlMMTI4OC45MSAxMDA1LjQ3VjMxMi41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyODguOTEgMTcxNi4yNVYyMTg3LjExTDE4NzUgMTM3Ni4yNUwxMjg4LjkxIDE3MTYuMjVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMTI4OC45MSAyMTg3LjExVjE3MTYuMTdMNzAzLjEyNSAxMzc2LjI1TDEyODguOTEgMjE4Ny4xMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjg4LjkxIDE2MDcuMjdMMTg3NC42MSAxMjY3LjE5TDEyODguOTEgMTAwNS42MlYxNjA3LjI3WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik03MDMuMTI1IDEyNjcuMTlMMTI4OC45MSAxNjA3LjI3VjEwMDUuNjJMNzAzLjEyNSAxMjY3LjE5WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zMjEyXzI3NjAiPgo8cmVjdCB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
            rpcUrls: [
                "https://uk.rpc.blxrbdn.com",
                "https://virginia.rpc.blxrbdn.com",
                "https://mainnet.gateway.tenderly.co",
                "https://cloudflare-eth.com",
                "https://singapore.rpc.blxrbdn.com",
                "https://1rpc.io/eth",
                "https://eth-pokt.nodies.app",
                "https://eth.llamarpc.com",
                "https://eth.rpc.blxrbdn.com",
                "https://eth.blockrazor.xyz",
                "https://eth-mainnet-public.unifra.io",
                "https://api.securerpc.com/v1",
                "https://rpc.flashbots.net/fast",
                "https://rpc.flashbots.net",
                "https://rpc.mevblocker.io",
                "https://rpc.mevblocker.io/noreverts",
                "https://rpc.public.curie.radiumblock.co/http/ethereum",
                "https://rpc.mevblocker.io/fast",
                "https://rpc.public.curie.radiumblock.co/ws/ethereum",
                "https://rpc.mevblocker.io/fullprivacy",
                "https://eth.merkle.io",
                "https://ethereum-rpc.publicnode.com",
                "https://eth.drpc.org",
                "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
                "https://ethereum.blockpi.network/v1/rpc/public",
                "https://api.zan.top/eth-mainnet",
                "https://gateway.tenderly.co/public/mainnet",
                "https://eth-mainnet.public.blastapi.io",
                "https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
                "https://rpc.payload.de",
                "https://rpc.eth.gateway.fm",
                "https://rpc.graffiti.farm",
                "https://core.gashawk.io/rpc",
                "https://eth.meowrpc.com",
                "https://rpc.ankr.com/eth",
                "https://rpc.lokibuilder.xyz/wallet",
                "https://ethereum.rpc.subquery.network/public",
                "wss://eth.drpc.org",
                "wss://ethereum.callstaticrpc.com",
                "wss://eth-mainnet.4everland.org/ws/v1/37fa9972c1b1cd5fab542c7bdd4cde2f",
                "wss://ethereum-rpc.publicnode.com",
            ],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            holesky: {
                chainId: 17000,
                base: "evm",
                chainName: "Holesky",
                logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzIxMl8yNzYwKSI+CjxwYXRoIGQ9Ik0xMjUwIDI1MDBDMTk0MC4zNiAyNTAwIDI1MDAgMTk0MC4zNiAyNTAwIDEyNTBDMjUwMCA1NTkuNjQ0IDE5NDAuMzYgMCAxMjUwIDBDNTU5LjY0NCAwIDAgNTU5LjY0NCAwIDEyNTBDMCAxOTQwLjM2IDU1OS42NDQgMjUwMCAxMjUwIDI1MDBaIiBmaWxsPSIjNjI3RUVBIi8+CjxwYXRoIGQ9Ik0xMjg4LjkxIDMxMi41VjEwMDUuNDdMMTg3NC42MSAxMjY3LjE5TDEyODguOTEgMzEyLjVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMTI4OC45MSAzMTIuNUw3MDMuMTI1IDEyNjcuMTlMMTI4OC45MSAxMDA1LjQ3VjMxMi41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyODguOTEgMTcxNi4yNVYyMTg3LjExTDE4NzUgMTM3Ni4yNUwxMjg4LjkxIDE3MTYuMjVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMTI4OC45MSAyMTg3LjExVjE3MTYuMTdMNzAzLjEyNSAxMzc2LjI1TDEyODguOTEgMjE4Ny4xMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjg4LjkxIDE2MDcuMjdMMTg3NC42MSAxMjY3LjE5TDEyODguOTEgMTAwNS42MlYxNjA3LjI3WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik03MDMuMTI1IDEyNjcuMTlMMTI4OC45MSAxNjA3LjI3VjEwMDUuNjJMNzAzLjEyNSAxMjY3LjE5WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zMjEyXzI3NjAiPgo8cmVjdCB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
                rpcUrls: [
                    "https://ethereum-holesky.blockpi.network/v1/rpc/public",
                    "https://rpc.holesky.ethpandaops.io",
                    "https://ethereum-holesky-rpc.publicnode.com",
                    "https://1rpc.io/holesky",
                    "wss://ethereum-holesky-rpc.publicnode.com",
                ],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
            sepolia: {
                chainId: 11155111,
                base: "evm",
                chainName: "Sepolia",
                logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzIxMl8yNzYwKSI+CjxwYXRoIGQ9Ik0xMjUwIDI1MDBDMTk0MC4zNiAyNTAwIDI1MDAgMTk0MC4zNiAyNTAwIDEyNTBDMjUwMCA1NTkuNjQ0IDE5NDAuMzYgMCAxMjUwIDBDNTU5LjY0NCAwIDAgNTU5LjY0NCAwIDEyNTBDMCAxOTQwLjM2IDU1OS42NDQgMjUwMCAxMjUwIDI1MDBaIiBmaWxsPSIjNjI3RUVBIi8+CjxwYXRoIGQ9Ik0xMjg4LjkxIDMxMi41VjEwMDUuNDdMMTg3NC42MSAxMjY3LjE5TDEyODguOTEgMzEyLjVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMTI4OC45MSAzMTIuNUw3MDMuMTI1IDEyNjcuMTlMMTI4OC45MSAxMDA1LjQ3VjMxMi41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyODguOTEgMTcxNi4yNVYyMTg3LjExTDE4NzUgMTM3Ni4yNUwxMjg4LjkxIDE3MTYuMjVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMTI4OC45MSAyMTg3LjExVjE3MTYuMTdMNzAzLjEyNSAxMzc2LjI1TDEyODguOTEgMjE4Ny4xMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjg4LjkxIDE2MDcuMjdMMTg3NC42MSAxMjY3LjE5TDEyODguOTEgMTAwNS42MlYxNjA3LjI3WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik03MDMuMTI1IDEyNjcuMTlMMTI4OC45MSAxNjA3LjI3VjEwMDUuNjJMNzAzLjEyNSAxMjY3LjE5WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zMjEyXzI3NjAiPgo8cmVjdCB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
                rpcUrls: [
                    "https://api.zan.top/node/v1/eth/sepolia/public",
                    "https://endpoints.omniatech.io/v1/eth/sepolia/public",
                    "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
                    "https://eth-sepolia.public.blastapi.io",
                    "https://public.stackup.sh/api/v1/node/ethereum-sepolia",
                    "https://rpc.sepolia.ethpandaops.io",
                    "https://gateway.tenderly.co/public/sepolia",
                    "https://sepolia.gateway.tenderly.co",
                    "https://rpc2.sepolia.org",
                    "https://eth-sepolia-public.unifra.io",
                    "https://eth-sepolia.api.onfinality.io/public",
                    "https://rpc-sepolia.rockx.com",
                    "https://ethereum-sepolia-rpc.publicnode.com",
                    "https://1rpc.io/sepolia",
                    "wss://ethereum-sepolia-rpc.publicnode.com",
                    "wss://sepolia.gateway.tenderly.co",
                ],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    optimism: {
        mainnet: {
            chainId: 10,
            base: "evm",
            chainName: "Optimism",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEz/BCD/BCD/BCD/BCD/BCD/BCD/Ax//BCD/AyD/AyD/ABX//f3/AAH/gIb/5Ob/Xmf/QUz/HzH/s7b/zdBwbv+qAAAACnRSTlMAh2Dgwz8y+u0W66fO0wAAAMxJREFUKJF9k+0agiAMhSHJkO0MUO//WiNjmmU7P0B5n30ynFONPsSUYvCj+9atAVW8ndA0pJOG6WD39KO7wXY6XbGU3p6HazhseV6zlF45x38wttr3H6Jt2bZNo/OKUGQmKiKCfuRd6F8zc+aKta3cadCQyBnIK3jBzIV60IcaCmHNYKkLz92b6xELV2pmlZv3oimp22YJ4SoMQFnUhLA0G3k5PgoNeymohUCl0gH90YTeg48WjXb77MabV2Zftjkm9oDZo2kP9Z/n8ASkXBmW2axKlAAAAABJRU5ErkJggg==",
            rpcUrls: [
                "https://mainnet.optimism.io",
                "https://optimism.llamarpc.com",
                "https://optimism.blockpi.network/v1/rpc/public",
                "https://op-pokt.nodies.app",
                "https://endpoints.omniatech.io/v1/op/mainnet/public",
                "https://optimism.rpc.subquery.network/public",
                "https://rpc.ankr.com/optimism",
                "https://1rpc.io/op",
                "https://optimism-mainnet.public.blastapi.io",
                "https://optimism-rpc.publicnode.com",
                "https://api.stateless.solutions/optimism/v1/demo",
                "https://optimism.api.onfinality.io/public",
                "https://optimism.drpc.org",
                "https://optimism.gateway.tenderly.co",
                "https://gateway.tenderly.co/public/optimism",
                "https://optimism.meowrpc.com",
                "https://rpc.buildbear.io/esquivelfabian",
                "https://go.getblock.io/e8a75f8dcf614861becfbcb185be6eb4",
                "wss://optimism-rpc.publicnode.com",
                "wss://optimism.drpc.org",
                "wss://optimism.gateway.tenderly.co",
            ],
            blockExplorerUrls: ["https://optimistic.etherscan.io"],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            goerli: {
                chainId: 420,
                base: "evm",
                chainName: "Optimism Goerli",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEz/BCD/BCD/BCD/BCD/BCD/BCD/Ax//BCD/AyD/AyD/ABX//f3/AAH/gIb/5Ob/Xmf/QUz/HzH/s7b/zdBwbv+qAAAACnRSTlMAh2Dgwz8y+u0W66fO0wAAAMxJREFUKJF9k+0agiAMhSHJkO0MUO//WiNjmmU7P0B5n30ynFONPsSUYvCj+9atAVW8ndA0pJOG6WD39KO7wXY6XbGU3p6HazhseV6zlF45x38wttr3H6Jt2bZNo/OKUGQmKiKCfuRd6F8zc+aKta3cadCQyBnIK3jBzIV60IcaCmHNYKkLz92b6xELV2pmlZv3oimp22YJ4SoMQFnUhLA0G3k5PgoNeymohUCl0gH90YTeg48WjXb77MabV2Zftjkm9oDZo2kP9Z/n8ASkXBmW2axKlAAAAABJRU5ErkJggg==",
                rpcUrls: ["https://goerli.optimism.io"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
            sepolia: {
                chainId: 420,
                base: "evm",
                chainName: "Optimism Sepolia",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEz/BCD/BCD/BCD/BCD/BCD/BCD/Ax//BCD/AyD/AyD/ABX//f3/AAH/gIb/5Ob/Xmf/QUz/HzH/s7b/zdBwbv+qAAAACnRSTlMAh2Dgwz8y+u0W66fO0wAAAMxJREFUKJF9k+0agiAMhSHJkO0MUO//WiNjmmU7P0B5n30ynFONPsSUYvCj+9atAVW8ndA0pJOG6WD39KO7wXY6XbGU3p6HazhseV6zlF45x38wttr3H6Jt2bZNo/OKUGQmKiKCfuRd6F8zc+aKta3cadCQyBnIK3jBzIV60IcaCmHNYKkLz92b6xELV2pmlZv3oimp22YJ4SoMQFnUhLA0G3k5PgoNeymohUCl0gH90YTeg48WjXb77MabV2Zftjkm9oDZo2kP9Z/n8ASkXBmW2axKlAAAAABJRU5ErkJggg==",
                rpcUrls: ["https://sepolia.optimism.io"],
                blockExplorerUrls: ["https://sepolia-optimistic.etherscan.io"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    bsc: {
        mainnet: {
            chainId: 56,
            base: "evm",
            chainName: "BNB Smart Chain",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAKlBMVEVHcEzwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQqwMrdXAAAADnRSTlMAG564LYLx/23O4FYLQANehvgAAAEFSURBVHgBTNClQgVREADQWSsruMVXcBrulsh4xPuzWSi407BEwd3d+YPb0I/hKrxZPSt3BEQkFUFMpA5gy78yVhGHRpWcUtyaxdCCpI7dxGzDKg53Qjv/cUa8nISMBMo7DLhm6SABa2D3FcyBaMDVSkN1lFgH5s6S+jiZsyBZLLVkUbpzBTfIEmHE6nsF8Agli4hHADQCiuAlgLlR5wxwjmhZfCmWAqP0Ilb+SGhCPHIfJG+KdMSqpIiiz3itmCy4JLimPTF+JzRSshbAoBQtwCfPGGLZD1j7neiDdwrXuMXaBzPLd4h5et1N5OhyjK3ZqvNTkPHGlkqEv/gdR3p5AIKHiBQAFI5lv+lWG40AAAAASUVORK5CYII=",
            rpcUrls: [
                "https://binance.llamarpc.com",
                "https://0.48.club",
                "https://bsc-pokt.nodies.app",
                "https://rpc-bsc.48.club",
                "https://bsc.meowrpc.com",
                "https://bnb.rpc.subquery.network/public",
                "https://bnb.api.onfinality.io/public",
                "https://bsc-dataseed1.defibit.io",
                "https://bsc-dataseed4.defibit.io",
                "https://bsc-dataseed1.ninicoin.io",
                "https://bsc-dataseed2.ninicoin.io",
                "https://bsc-dataseed4.ninicoin.io",
                "https://bsc-dataseed.bnbchain.org",
                "https://bsc-dataseed3.bnbchain.org",
                "https://bsc-dataseed4.bnbchain.org",
                "https://bsc-dataseed2.defibit.io",
                "https://bsc-dataseed3.ninicoin.io",
                "https://bsc-dataseed1.bnbchain.org",
                "https://bsc-dataseed3.defibit.io",
                "https://bsc-dataseed2.bnbchain.org",
                "https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3",
                "https://binance.nodereal.io",
                "https://rpc.ankr.com/bsc",
                "https://bsc.blockpi.network/v1/rpc/public",
                "https://bscrpc.com",
                "https://api.zan.top/bsc-mainnet",
                "https://bsc.drpc.org",
                "https://bsc.blockrazor.xyz",
                "https://endpoints.omniatech.io/v1/bsc/mainnet/public",
                "https://bsc-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
                "https://bsc-mainnet.public.blastapi.io",
                "https://bsc-rpc.publicnode.com",
                "https://bsc-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f",
                "https://go.getblock.io/cc778cdbdf5c4b028ec9456e0e6c0cf3",
                "wss://bsc-mainnet.4everland.org/ws/v1/37fa9972c1b1cd5fab542c7bdd4cde2f",
                "wss://bsc-rpc.publicnode.com",
                "wss://bsc.callstaticrpc.com",
            ],
            nativeCurrency: {
                name: "Binance Coin",
                symbol: "BNB",
                decimals: 18,
            },
        },
        testnet: {
            testnet: {
                chainId: 97,
                base: "evm",
                chainName: "BNB Smart Chain Testnet",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAKlBMVEVHcEzwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQrwuQqwMrdXAAAADnRSTlMAG564LYLx/23O4FYLQANehvgAAAEFSURBVHgBTNClQgVREADQWSsruMVXcBrulsh4xPuzWSi407BEwd3d+YPb0I/hKrxZPSt3BEQkFUFMpA5gy78yVhGHRpWcUtyaxdCCpI7dxGzDKg53Qjv/cUa8nISMBMo7DLhm6SABa2D3FcyBaMDVSkN1lFgH5s6S+jiZsyBZLLVkUbpzBTfIEmHE6nsF8Agli4hHADQCiuAlgLlR5wxwjmhZfCmWAqP0Ilb+SGhCPHIfJG+KdMSqpIiiz3itmCy4JLimPTF+JzRSshbAoBQtwCfPGGLZD1j7neiDdwrXuMXaBzPLd4h5et1N5OhyjK3ZqvNTkPHGlkqEv/gdR3p5AIKHiBQAFI5lv+lWG40AAAAASUVORK5CYII=",
                rpcUrls: [
                    "https://data-seed-prebsc-2-s2.bnbchain.org:8545",
                    "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
                    "https://data-seed-prebsc-2-s1.bnbchain.org:8545",
                    "https://data-seed-prebsc-1-s2.bnbchain.org:8545",
                    "https://bsc-testnet.blockpi.network/v1/rpc/public",
                    "https://api.zan.top/node/v1/bsc/testnet/public",
                    "https://public.stackup.sh/api/v1/node/bsc-testnet",
                    "https://bsc-testnet-rpc.publicnode.com",
                    "https://bsc-testnet.public.blastapi.io",
                    "https://endpoints.omniatech.io/v1/bsc/testnet/public",
                    "wss://bsc-testnet-rpc.publicnode.com",
                ],
                blockExplorerUrls: ["https://testnet.bscscan.com/"],
                nativeCurrency: {
                    name: "Testnet Binance Coin",
                    symbol: "tBNB",
                    decimals: 18,
                },
            },
        },
    },
    gnosis: {
        mainnet: {
            chainId: 100,
            base: "evm",
            chainName: "Gnosis",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAKlBMVEU+aVdHcEw+aVc9Z1U+aVc+aVc9aFY+aVc+aVc9aFY9aFY+aVc9aFY9aFa0wS0JAAAADnRSTlP/AIIU7Mhh3LkuO5wfSHwab1sAAAD3SURBVCiRdZProoQgCIQHvGHq+7/uAdTWdjvzw4pPx0AEbVVOEYiJ6x3CemYFQCk2xvyAQYMyZmSITgofeAEp3GYUFF8bKsv0UAbGgkCjLzVgwQDwkzEQHObyQ52VrDAifVFnCZFQYfYnnZ6a9wW2X5WDznX2w4yk7+NwXp5Dc1BnddVZmy6mboBXtHZsuhm6xUzNcoZn5DnoKGYx11ZiTagbDdQFkak7Mg/MA2nUO81KDosm+HLExmL72n7CzY9VUcWhJOdXtfL9o0ie5Lus8FTeWfHzDO8w3G3yq+tosDd2tOZjv6M176ZeOTyb2lRZ7DrIcR3+APX8BR6lfT+rAAAAAElFTkSuQmCC",
            rpcUrls: [
                "https://rpc.ankr.com/gnosis",
                "https://gnosis-pokt.nodies.app",
                "https://gnosis-mainnet.public.blastapi.io",
                "https://gnosis.blockpi.network/v1/rpc/public",
                "https://endpoints.omniatech.io/v1/gnosis/mainnet/public",
                "https://gnosis.oat.farm",
                "https://gnosis.drpc.org",
                "https://gnosis-rpc.publicnode.com",
                "https://1rpc.io/gnosis",
                "https://rpc.gnosischain.com",
                "https://rpc.tornadoeth.cash/gnosis",
                "wss://gnosis-rpc.publicnode.com",
                "wss://rpc.gnosischain.com/wss",
            ],
            blockExplorerUrls: ["https://gnosisscan.io/"],
            nativeCurrency: {
                name: "xDAI",
                symbol: "XDAI",
                decimals: 18,
            },
        },
        testnet: {
            chiado: {
                chainId: 10200,
                base: "evm",
                chainName: "Gnosis Chiado",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEUAFCgAAh4ADiRfaHMAFCgAFCj///8AFCgAFCgAFCinrbPl5+oTJTj5+vptdn+Ql59OWGR/h5AfMEKboag1PkzX2966vsTr7e/Gy88bH7tKAAAACnRSTlP6////tP//rx2pnoS5tgAAAUFJREFUKJF9k9magyAMhQ0Zog37Ivr+TzrRgq2dJTcS/o9DQo7T8pj0rzHNy/S4MqVAQqlrY57GOQW6RsRYNQx8MbCe91ViZ29h0M5iM3tJ3qeymxbhDSrAbfVVviJZ/bohvCB41/IoRUFuzsOACgKlqwxJE4UzFagy5uCC7VRZSWRLnRC8YV22ToVtRbM5hCetNNOebTEnFWaKzTuxAIF1pxQ5n/RkmWOivR4Q4uowkdAtAIhmZkroVmlWIBpCJMe2uJRcseyO3OCArBrJLYEoSAXUFA8YV3LJ+oBVl6IrBm+To6fsUZCIekyNc+aW0ItwL0gfQoI32WHuC+qtHI9APZwbq/4I0nejH9Hs8/mkJPPJzDnS58hwu7M+0DHs21nzPmyhYpML3W1yGcyYu8H+teb88vinqb+mZf7jd9Bfyzf4jRhskFfflgAAAABJRU5ErkJggg==",
                rpcUrls: ["https://1rpc.io/gnosis"],
                blockExplorerUrls: ["https://gnosis-chiado.blockscout.com/"],
                nativeCurrency: {
                    name: "xDAI",
                    symbol: "XDAI",
                    decimals: 18,
                },
            },
        },
    },
    polygon: {
        mainnet: {
            chainId: 137,
            base: "evm",
            chainName: "Polygon",
            logo: "data:image/webp;base64,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",
            rpcUrls: [
                "https://polygon.llamarpc.com",
                "wss://polygon-bor-rpc.publicnode.com",
                "https://polygon.meowrpc.com",
                "https://polygon.rpc.subquery.network/public",
                "https://rpc.ankr.com/polygon",
                "https://polygon-rpc.com",
                "https://1rpc.io/matic",
                "https://polygon.drpc.org",
                "https://endpoints.omniatech.io/v1/matic/mainnet/public",
                "https://rpc-mainnet.matic.quiknode.pro",
                "https://polygon-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
                "https://go.getblock.io/02667b699f05444ab2c64f9bff28f027",
                "https://polygon-bor-rpc.publicnode.com",
                "https://polygon.api.onfinality.io/public",
                "https://polygon.blockpi.network/v1/rpc/public",
                "https://api.zan.top/polygon-mainnet",
                "https://polygon-pokt.nodies.app",
                "https://polygon-mainnet.public.blastapi.io",
                "https://gateway.tenderly.co/public/polygon",
                "https://polygon.gateway.tenderly.co",
                "wss://polygon.drpc.org",
                "wss://polygon-mainnet.4everland.org/ws/v1/37fa9972c1b1cd5fab542c7bdd4cde2f",
            ],
            nativeCurrency: {
                name: "Polygon",
                symbol: "MATIC",
                decimals: 18,
            },
        },
        testnet: {
            mumbai: {
                chainId: 80001,
                base: "evm",
                chainName: "Polygon Mumbai",
                logo: "data:image/webp;base64,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",
                rpcUrls: [
                    "https://rpc.ankr.com/polygon_mumbai",
                    "https://polygon-mumbai-bor.publicnode.com",
                    "https://polygon-mumbai.blockpi.network/v1/rpc/public",
                    "https://rpc-mumbai.maticvigil.com",
                    "https://polygon-mumbai.g.alchemy.com/v2/demo",
                    "https://gateway.tenderly.co/public/polygon-mumbai",
                    "https://polygon-mumbai.gateway.tenderly.co",
                    "https://polygon-testnet.public.blastapi.io    ",
                    "https://endpoints.omniatech.io/v1/matic/mumbai/public",
                ],
                blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                nativeCurrency: {
                    name: "Polygon",
                    symbol: "MATIC",
                    decimals: 18,
                },
            },
        },
    },
    polygon_zkevm: {
        mainnet: {
            chainId: 1101,
            base: "evm",
            chainName: "Polygon zkEVM",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJ1BMVEVHcEx7P+R7P+R7P+R7P+R7P+V7P+R7PuR7P+R7P+R7P+Z7P+R7P+Wom7PeAAAADXRSTlMAH7P/o22SP+3LFX5Vbg7mjAAAALBJREFUeAFjIBYwKhsJoAg4GxubIPODjR3YjE0R/ArjiQwMK43bITwwEyI8C8JnM7aGaUwA05NNGE7vXgDEDM6WID6PsQCrsbEBCDMaHwAKsJgycJrsMAdhhmAHoACTDQOnOQQyHFZAEwiGCvBshECGyVABGFhkDBYwdTaGAYgAgmsSDBHQgmmB2mIJNxQqYIrhDmQBDKdjeA7q/Wq49zEDCDMIMQMZEQ3oEYUZlUQCAHdePrGmeAqLAAAAAElFTkSuQmCC",
            rpcUrls: ["https://zkevm-rpc.com"],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            testnet: {
                chainId: 1442,
                base: "evm",
                chainName: "Polygon zkEVM Testnet",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJ1BMVEVHcEx7P+R7P+R7P+R7P+R7P+V7P+R7PuR7P+R7P+R7P+Z7P+R7P+Wom7PeAAAADXRSTlMAH7P/o22SP+3LFX5Vbg7mjAAAALBJREFUeAFjIBYwKhsJoAg4GxubIPODjR3YjE0R/ArjiQwMK43bITwwEyI8C8JnM7aGaUwA05NNGE7vXgDEDM6WID6PsQCrsbEBCDMaHwAKsJgycJrsMAdhhmAHoACTDQOnOQQyHFZAEwiGCvBshECGyVABGFhkDBYwdTaGAYgAgmsSDBHQgmmB2mIJNxQqYIrhDmQBDKdjeA7q/Wq49zEDCDMIMQMZEQ3oEYUZlUQCAHdePrGmeAqLAAAAAElFTkSuQmCC",
                rpcUrls: ["https://rpc.public.zkevm-test.net"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    fantom: {
        mainnet: {
            chainId: 250,
            base: "evm",
            chainName: "Fantom Opera",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUZaf8AY/8AX/8AYf+atf/e6P+guf8MZf8AW/+Nq//n7/+Hp/+Rr/8AVf+Xsv9ij//h6v8AXv9Uhv/d5v8scv/O2//I1v8ibf++z//Y4/85d/9JgP+5y/+rwf9nkv/R3v8pcP91m/9ci/+vxP/w9f8O9r57AAAAyElEQVR4AcXORQKEMAwF0CQdJqG4u3P/M44LtuZD9dXg7CCROqSLYVwVAuKaWExtiljadlxbrczzLwECoNh+GMVLpCTNAriHIC/Cco1VkWdEUEdVIrBGFK9omqKVoKMN8n2X1mkZ0A7eDwxbs+zSfotp4YkaXCVh0gUbjIYHkozdFhOcfK8172+GgwfNcxrvPojvFfTEoDYY3PGdDWZVF7yVpVgh+60ehB80aIuXqK6N3F8rMho1I8BKGSjLiyLvCXZz54wYzs0NEbAM+fJTno8AAAAASUVORK5CYII=",
            rpcUrls: [
                "https://rpc.ftm.tools",
                "https://fantom.blockpi.network/v1/rpc/public",
                "https://fantom-mainnet.public.blastapi.io",
                "https://fantom.drpc.org",
                "https://rpc.fantom.gateway.fm",
                "https://rpcapi.fantom.network",
                "https://rpc3.fantom.network",
                "https://fantom-pokt.nodies.app",
                "https://rpc.fantom.network",
                "https://rpc2.fantom.network",
                "https://endpoints.omniatech.io/v1/fantom/mainnet/public",
                "https://fantom-rpc.publicnode.com",
                "wss://fantom-rpc.publicnode.com",
            ],
            blockExplorerUrls: ["https://ftmscan.com/"],
            nativeCurrency: {
                name: "Fantom",
                symbol: "FTM",
                decimals: 18,
            },
        },
        testnet: {
            sonic: {
                chainId: 4002,
                base: "evm",
                chainName: "Fantom Sonic",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUZaf8AY/8AX/8AYf+atf/e6P+guf8MZf8AW/+Nq//n7/+Hp/+Rr/8AVf+Xsv9ij//h6v8AXv9Uhv/d5v8scv/O2//I1v8ibf++z//Y4/85d/9JgP+5y/+rwf9nkv/R3v8pcP91m/9ci/+vxP/w9f8O9r57AAAAyElEQVR4AcXORQKEMAwF0CQdJqG4u3P/M44LtuZD9dXg7CCROqSLYVwVAuKaWExtiljadlxbrczzLwECoNh+GMVLpCTNAriHIC/Cco1VkWdEUEdVIrBGFK9omqKVoKMN8n2X1mkZ0A7eDwxbs+zSfotp4YkaXCVh0gUbjIYHkozdFhOcfK8172+GgwfNcxrvPojvFfTEoDYY3PGdDWZVF7yVpVgh+60ehB80aIuXqK6N3F8rMho1I8BKGSjLiyLvCXZz54wYzs0NEbAM+fJTno8AAAAASUVORK5CYII=",
                rpcUrls: ["https://fantom.api.onfinality.io/public"],
                blockExplorerUrls: ["https://testnet.ftmscan.com/"],
                nativeCurrency: {
                    name: "Fantom",
                    symbol: "FTM",
                    decimals: 18,
                },
            },
        },
    },
    base: {
        mainnet: {
            chainId: 8453,
            base: "evm",
            chainName: "Base",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAxklEQVR4AWJwL/AhiBmC/psBcReg2DqwoBgGwji+RAd4U2SEN0YXeDs8IHSAdqFAl8gEt8T1wqk2LXc0+Yo/FP0RSXJSkkhijfRblILrXwb0qwArkkYXWEEfCzLK0mCCin0lblS4ggbWGq2XkTs13IHUEcwnUHcjd248ggyIirVvFFChgDMQjAXMQDAV8N+o5ABJj8XzFGUrPKhLsT4sOS8OemXTLEAwwg8+9GqDX9745wn/AONHDPwQhR8T8YOwf9SfWoz6GwrQB9oIu62tAAAAAElFTkSuQmCC",
            rpcUrls: [
                "https://base-mainnet.public.blastapi.io",
                "https://base.blockpi.network/v1/rpc/public",
                "https://base-rpc.publicnode.com",
                "https://api.zan.top/base-mainnet",
                "https://mainnet.base.org",
                "https://developer-access-mainnet.base.org",
                "https://1rpc.io/base",
                "https://base-pokt.nodies.app",
                "https://base.meowrpc.com",
                "https://base.api.onfinality.io/public",
                "https://base.rpc.subquery.network/public",
                "https://base.drpc.org",
                "wss://base.callstaticrpc.com",
                "wss://base-rpc.publicnode.com",
            ],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            sepolia: {
                chainId: 84532,
                base: "evm",
                chainName: "Base Sepolia",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAxklEQVR4AWJwL/AhiBmC/psBcReg2DqwoBgGwji+RAd4U2SEN0YXeDs8IHSAdqFAl8gEt8T1wqk2LXc0+Yo/FP0RSXJSkkhijfRblILrXwb0qwArkkYXWEEfCzLK0mCCin0lblS4ggbWGq2XkTs13IHUEcwnUHcjd248ggyIirVvFFChgDMQjAXMQDAV8N+o5ABJj8XzFGUrPKhLsT4sOS8OemXTLEAwwg8+9GqDX9745wn/AONHDPwQhR8T8YOwf9SfWoz6GwrQB9oIu62tAAAAAElFTkSuQmCC",
                rpcUrls: ["https://sepolia.base.org"],
                blockExplorerUrls: ["https://sepolia.basescan.org/"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    arbitrum: {
        mainnet: {
            chainId: 42161,
            base: "evm",
            chainName: "Arbitrum One",
            logo: "data:image/svg+xml,%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%20420%20420%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23clip0_1847_21175)%22%3E%3Cpath%20d%3D%22M210.981%2026.072C212.01%2026.072%20212.96%2026.3318%20213.909%2026.8415L367.933%20116.42C369.741%20117.449%20370.86%20119.348%20370.771%20121.406L370.171%20299.613C370.171%20301.682%20369.052%20303.57%20367.243%20304.6L212.7%20393.139C211.84%20393.658%20210.811%20393.908%20209.772%20393.908C208.732%20393.908%20207.793%20393.648%20206.844%20393.139L52.8301%20303.57C51.0213%20302.541%2049.9021%20300.642%2049.9921%20298.584L50.5916%20120.377C50.5916%20118.308%2051.7109%20116.42%2053.5196%20115.39L208.143%2026.7615C209.002%2026.3318%20210.032%2026.072%20210.981%2026.072ZM211.071%200C205.565%200%20200.058%201.37905%20195.152%204.21709L40.6085%2092.756C30.7154%2098.442%2024.5996%20108.935%2024.5996%20120.297L24%20298.504C24%20309.866%2030.0258%20320.359%2039.8291%20326.125L193.853%20415.703C198.759%20418.541%20204.266%20420.01%20209.772%20420.01C215.278%20420.01%20220.784%20418.631%20225.691%20415.793L380.234%20327.254C390.127%20321.578%20396.243%20311.075%20396.243%20299.723L396.843%20121.516C396.843%20110.154%20390.817%2099.6612%20381.013%2093.8952L226.99%204.30703C222.083%201.46899%20216.577%200%20211.071%200Z%22%20fill%3D%22%231B4ADD%22%2F%3E%3Cpath%20d%3D%22M241.428%2097.2878H218.884C217.165%2097.2878%20215.696%2098.3171%20215.096%2099.956L142.476%20298.979C141.957%20300.268%20142.996%20301.647%20144.365%20301.647H166.909C168.628%20301.647%20170.097%20300.617%20170.697%20298.979L243.317%2099.956C243.836%2098.6669%20242.797%2097.2878%20241.428%2097.2878ZM201.935%2097.2878H179.391C177.672%2097.2878%20176.203%2098.3171%20175.603%2099.956L103.063%20298.899C102.544%20300.188%20103.583%20301.567%20104.952%20301.567H127.497C129.215%20301.567%20130.684%20300.537%20131.284%20298.899L203.824%2099.956C204.344%2098.6669%20203.394%2097.2878%20201.935%2097.2878ZM231.195%20174.385C230.595%20172.576%20228.007%20172.576%20227.408%20174.385L215.706%20206.562C215.366%20207.422%20215.366%20208.451%20215.706%20209.32L248.403%20298.899C249.003%20300.448%20250.472%20301.567%20252.191%20301.567H274.735C276.114%20301.567%20277.143%20300.188%20276.624%20298.899L231.195%20174.385ZM316.036%20298.899L250.901%20120.262C250.302%20118.453%20247.714%20118.453%20247.114%20120.262L235.412%20152.44C235.072%20153.299%20235.072%20154.328%20235.412%20155.198L287.816%20298.899C288.416%20300.448%20289.885%20301.567%20291.603%20301.567H314.148C315.607%20301.657%20316.556%20300.188%20316.036%20298.899Z%22%20fill%3D%22%231B4ADD%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_1847_21175%22%3E%3Crect%20width%3D%22420%22%20height%3D%22420%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E",
            rpcUrls: [
                "https://arbitrum.drpc.org",
                "https://rpc.ankr.com/arbitrum",
                "https://api.zan.top/arb-one",
                "https://arbitrum.blockpi.network/v1/rpc/public",
                "https://arbitrum.meowrpc.com",
                "https://arbitrum.rpc.subquery.network/public",
                "https://arbitrum-one.publicnode.com",
                "https://arbitrum-one.public.blastapi.io",
                "https://arb-pokt.nodies.app",
                "https://arbitrum.gateway.tenderly.co",
                "https://1rpc.io/arb",
                "https://arb1.arbitrum.io/rpc",
                "https://arbitrum-one-rpc.publicnode.com",
                "https://arbitrum.llamarpc.com",
                "wss://arbitrum-one.publicnode.com",
                "wss://arbitrum-one-rpc.publicnode.com",
                "wss://arbitrum.callstaticrpc.com",
            ],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            sepolia: {
                chainId: 421614,
                base: "evm",
                chainName: "Arbitrum Sepolia",
                logo: "https://coinmeca-web3.vercel.app/421614/logo.svg",
                rpcUrls: [
                    "https://sepolia-rollup.arbitrum.io/rpc",
                    "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
                    "https://endpoints.omniatech.io/v1/arbitrum/sepolia/public",
                ],
                blockExplorerUrls: ["https://sepolia.arbiscan.io/"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    celo: {
        mainnet: {
            chainId: 42220,
            base: "evm",
            chainName: "Celo",
            logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkNGRjUyO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7fQo8L3N0eWxlPgo8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+Cgk8ZyBpZD0iXzE5NDI3OTI1NDQ3MzYiPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjEyNTAiIGN5PSIxMjUwIiByPSIxMjUwIj48L2NpcmNsZT4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTk0OS4zLDU0Ni4ySDU1MC43djE0MDcuN2gxMzk4Ljd2LTQ5MS40aC0yMzIuMWMtODAsMTc5LjMtMjYwLjEsMzA0LjEtNDY2LjIsMzA0LjEgICAgYy0yODQuMSwwLTUxNC4yLTIzMy42LTUxNC4yLTUxNy41YzAtMjg0LDIzMC4xLTUxNS42LDUxNC4yLTUxNS42YzIxMC4xLDAsMzkwLjIsMTI4LjksNDcwLjIsMzEyLjFoMjI4LjFWNTQ2LjJ6Ij48L3BhdGg+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==",
            rpcUrls: ["https://forno.celo.org"],
            nativeCurrency: {
                name: "Celo",
                symbol: "CELO",
                decimals: 18,
            },
        },
        testnet: {
            alfajores: {
                chainId: 44787,
                base: "evm",
                chainName: "Celo Alfajores",
                logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkNGRjUyO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7fQo8L3N0eWxlPgo8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+Cgk8ZyBpZD0iXzE5NDI3OTI1NDQ3MzYiPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjEyNTAiIGN5PSIxMjUwIiByPSIxMjUwIj48L2NpcmNsZT4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTk0OS4zLDU0Ni4ySDU1MC43djE0MDcuN2gxMzk4Ljd2LTQ5MS40aC0yMzIuMWMtODAsMTc5LjMtMjYwLjEsMzA0LjEtNDY2LjIsMzA0LjEgICAgYy0yODQuMSwwLTUxNC4yLTIzMy42LTUxNC4yLTUxNy41YzAtMjg0LDIzMC4xLTUxNS42LDUxNC4yLTUxNS42YzIxMC4xLDAsMzkwLjIsMTI4LjksNDcwLjIsMzEyLjFoMjI4LjFWNTQ2LjJ6Ij48L3BhdGg+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==",
                rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
                nativeCurrency: {
                    name: "Celo",
                    symbol: "CELO",
                    decimals: 18,
                },
            },
        },
    },
    avalanche: {
        mainnet: {
            chainId: 43114,
            base: "evm",
            chainName: "Avalanche C-chain",
            logo: "data:image/webp;base64,UklGRloEAABXRUJQVlA4IE4EAACQFwCdASo4ADgAPikKikUhkNDOeBgChLYAQXItfzP8VfZ3qf9I/AH46Zkzx//rf57+AHur9QHmAfp9/gPs57gHmA/af9JfeU9EHoAf0D+q9Y76AH7Aelr+0vwof37/UftV7Rd0Orsd+WU1wL0oMzDxuflP+W9gf9Y/+N2Bf2A9k/9ci/1utt2XG+z/BdpUcQztU6BOCmFJCMY+eY8iCbMv4XjpS4imEvfdrohqrRHh1e6HaSd1xR/2uSY1Oa4A7h8kuZkMAAD+//j3bRGadG2PK+60jE+F6yErFeMuYr6op5+qVUZ3SUgbRPtQV2LZkcJh7FaZkIUZv405f3xygzH8iMPEgzR1dZpAnXsv3rUw793vVHzMLSncSJcz8wrQ/1t/+q//lM6+P80qLRn3fdJZVYwbGn5iWp+6gp2ID4jvvR7ZOTHxP74aXRB5cML/HfR1WMItBq/qA43Bpf3ipr4Qu5AP7XXMqsh92yH6BiUChFMyFil9ml6c5zbE7GEyxU1vehPl1JzCUvwWwbgK7j78/ir/mdjw0wYO2h+Rt6SXEZ//pOJ+EdFYAXGD3ls+FO1q53VVMyy48bnGzYIy6fOklsGzgvKb5U5rI6PwdBPSEw8MCpDzdig8mbcMfztkhRP8pnQDOUixf/+O/j2NY4PCSDXqWqFRK1M84URD+F1DpYwG2vPHIgHAERcmp3Y/kINTUXqIrBu8HyMI0KG3+jXV+TFwepVKhrB2//Rsxl35VZJNxrbs8oqCyZ+rw3FYtg+inP8JvUZu32qXLySGCPBAB6IraVlUrMRnhnRT9RaQl+/kNWQKegMLSevFUD4Pf7+bafaHqfKVrP9WCOgzkZrk7T9gOtfdwP0h8hfhNOemuWsbJ+iTGQwKp6rM08LMPXHmd2t4Bg2mZMazddQuOcY25LjCUrcoWr8/JtROkNJqykZsjytp8K/3sL+dxyLa7woXhnR+veo7zqGo9IdaDjienxx7UthIj7qUn0TOIcVtt/yIp67euvZdjPPHGh8DTyG/kLwAhGUZzMhlKhf2sQ6QdoRWq3EGrOoMe9G28iC3Rg4xaj3DAvp1Y93Cl7Bhgyw1QIo18/QNLpyGiBvFqdlp6dckDJGM4aSYAXVFNd2P5EPciNbz7Im4KodfhpWz4wjwj4e+ytv+v86AeDb3vqygQkUQ0/2x1Hej7z9IH+B9NS+JiQdPumRTC8OI3bVP8euf/ZWPQ05Z3HoQ185kCeWxTLcxlB9yQTPvv/qJHkb+N9K6palcvPpHjnfJKjZolOwG/dV9RXH5MDltJcdWrk/LF+lcAwGuh6lxWpBVrSioAOWTMD/xOdvYKEBt4GdP+0McwiOLbHCrCvoWpx3PcF5Kss+xapIAQCEJ4MEPM+gRRUKnMs++x0dBGgnIGP/jb5vEk6n5fe/SQ2RNFTq/XNmijUQJu5aJwqrZROaQJueu93Gz/6VPdH6bX1AAAAAA",
            rpcUrls: [
                "https://avalanche-mainnet.infura.io",
                "https://avalanche.public-rpc.com",
                "https://rpc.ankr.com/avalanche",
                "https://avalanche.blockpi.network/v1/rpc/public",
                "https://api.avax.network/ext/bc/C/rpc",
                "https://endpoints.omniatech.io/v1/avax/mainnet/public",
                "https://avax-pokt.nodies.app/ext/bc/C/rpc",
                "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
                "https://1rpc.io/avax/c",
                "https://avalanche-c-chain.publicnode.com",
                "https://avax.meowrpc.com",
                "https://avalanche.api.onfinality.io/public/ext/bc/C/rpc",
                "wss://avalanche-c-chain.publicnode.com",
            ],
            nativeCurrency: {
                name: "Avalanche",
                symbol: "AVAX",
                decimals: 18,
            },
        },
        testnet: {
            fuji: {
                chainId: 43113,
                base: "evm",
                chainName: "Avalanche Fuji",
                logo: "https://coinmeca-web3.vercel.app/43114/logo.svg",
                rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
                blockExplorerUrls: ["https://testnet.snowtrace.io/"],
                nativeCurrency: {
                    name: "Avalanche",
                    symbol: "AVAX",
                    decimals: 18,
                },
            },
        },
    },
    berachain: {
        testnet: {
            artio: {
                chainId: 80085,
                base: "evm",
                chainName: "Berachain Artio",
                logo: "https://coinmeca-web3.vercel.app/80085/logo.svg",
                rpcUrls: ["https://artio.rpc.berachain.com/"],
                blockExplorerUrls: ["https://artio.beratrail.io/"],
                nativeCurrency: {
                    name: "Bera",
                    symbol: "BERA",
                    decimals: 18,
                },
            },
        },
    },
    blast: {
        mainnet: {
            chainId: 81457,
            base: "evm",
            chainName: "Blast",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAQcAAAAAAAAAAAAAAAAAAAAAAAA4NxZycRNZWBv+/hP//wLU1BmtrR+DgxjHxx7p6RwhXe+nAAAADHRSTlMATpbK7P8QpP+Q6h2+StNaAAAA5UlEQVR4AXTSBRLDMAwEQBnUXNj4/69WM4bwtmFRgE6UNpbZGq3oxW/AyfCjmxE34zV9wsN0KjLj1dzz8aHVmPBhus/3MJ4aLOtNbzJAYNvdjWcAgwRAcNjdw84AiBQA3qJY40lwLkEo0hAMkRccJGCF0GRQbW6P6PbSAYbsKUcCYih2X+pZ4ksO12HLZcE9YJOzsk5F78Zkzx2axe2hPW2DIpep7tGGdMuRDuIerUn1nJy6+qCFImo5F3mrAe1lLftZXlEN7XXzBfjyTf2HL8EQSnIEEy3BZE844xDOeoQzL8HsDwCQ1h/nenuvTQAAAABJRU5ErkJggg==",
            rpcUrls: [
                "https://rpc.blast.io",
                "https://rpc.ankr.com/blast",
                "https://blast.din.dev/rpc",
                "https://blastl2-mainnet.public.blastapi.io",
                "https://blast.blockpi.network/v1/rpc/public",
                "https://blast.gasswap.org",
                "wss://blast.gasswap.org",
            ],
            blockExplorerUrls: ["https://blastscan.io"],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            sepolia: {
                chainId: 168587773,
                base: "evm",
                chainName: "Blast Sepolia Testnet",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAQcAAAAAAAAAAAAAAAAAAAAAAAA4NxZycRNZWBv+/hP//wLU1BmtrR+DgxjHxx7p6RwhXe+nAAAADHRSTlMATpbK7P8QpP+Q6h2+StNaAAAA5UlEQVR4AXTSBRLDMAwEQBnUXNj4/69WM4bwtmFRgE6UNpbZGq3oxW/AyfCjmxE34zV9wsN0KjLj1dzz8aHVmPBhus/3MJ4aLOtNbzJAYNvdjWcAgwRAcNjdw84AiBQA3qJY40lwLkEo0hAMkRccJGCF0GRQbW6P6PbSAYbsKUcCYih2X+pZ4ksO12HLZcE9YJOzsk5F78Zkzx2axe2hPW2DIpep7tGGdMuRDuIerUn1nJy6+qCFImo5F3mrAe1lLftZXlEN7XXzBfjyTf2HL8EQSnIEEy3BZE844xDOeoQzL8HsDwCQ1h/nenuvTQAAAABJRU5ErkJggg==",
                rpcUrls: [
                    "https://sepolia.blast.io",
                    "https://blast-sepolia.drpc.org",
                    "https://blast-sepolia.blockpi.network/v1/rpc/public",
                    "wss://blast-sepolia.drpc.org",
                ],
                blockExplorerUrls: ["https://testnet.blastscan.io"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    zora: {
        mainnet: {
            chainId: 7777777,
            base: "evm",
            chainName: "Zora",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVHcEw3HR1xQCNeOC1lTV1uQSpVNDJARIk4JkdXLR4yHCOcmuiinel9SihcMR+NkuZuheY/OGlKaMdGV6hNYbh7jOmGkOlNb9RGW7JHW69TcdImERctFRU/Zc5AWLM9atoqFiJIfPO7quswGy7ty+tdhfQ9b+Q/de1APXignu41IjtBS5nKsOn52+9LJRqQmO9vjPM+XsM7LFLgvuk7Gxc9MV6upOzVt+l6kPE/UKRqOiL/6vVhgupNduFTfu0/N2uFk+55Ryd8SkoSAAAAG3RSTlMA4+uFFjRe/v78PTji1MBe68/A6zC/g+iD/IZPjXSDAAABp0lEQVQokWXS6aKaMBQE4AAiYNXerSuCyKKsAkFBBIT7/i/VScSl7fz0cw6HEEJu+fj59qNrX759/0L+zfTdNLpLexrSIJh//Ysmr8rV0sC249ieTx42o36dr7s2S0s7roqiiu377FnYo7i9eENgV4WLFHE56sRRWXF3QTEu3CRJXLeKg+tkwcFUY73zstSu3KRpmoRV53xPKzyyqZsHNgkwZTsLT1g+NYcXQuTViPdnNnhoZQdD+0Ek/YYb7/S0bXpqf5MlmlRhC2Eu3mV8TxS7NyKsdIefAatmaVDaSBkMWdu9Ew2o9hGfC8UBBkGanmDGL6Id+EOv1Y0HRjLv0q3ziIgHfaxCOSMXmGEqZLlfoUr9UcHIbguLXomk8eoRmoOZb0EwXyLymVVvaqxZDCOHUZkQUTuMqtSmmbOYZqT0VGUHf95zDWnvK1FU13UUKf6RhlP2WRZcsZVKj72P9D3IEa4f+3NUxwlVlVKqqqFjWeM1kkfVLQt/QCxLX81ulwiqgZmPeRgmLzjDeQ7C09VkO4tgbc+jTf+787K0EM9ncSnJ95/+AL7bXf1cqXaUAAAAAElFTkSuQmCC",
            rpcUrls: ["https://rpc.zora.energy"],
            blockExplorerUrls: ["https://explorer.zora.energy/"],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            sepolia: {
                chainId: 999999999,
                chainName: "Zora Sepolia",
                base: "evm",
                logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIzNThfMzIxKSI+CjxwYXRoIGQ9Ik00MCAyMEM0MCA4Ljk1NDMxIDMxLjA0NTcgMCAyMCAwQzguOTU0MzEgMCAwIDguOTU0MzEgMCAyMEMwIDMxLjA0NTcgOC45NTQzMSA0MCAyMCA0MEMzMS4wNDU3IDQwIDQwIDMxLjA0NTcgNDAgMjBaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfMjM1OF8zMjEpIi8+CjxwYXRoIGQ9Ik00MCAyMEM0MCA4Ljk1NDMgMzEuMDQ1NyAwIDIwIDBDOC45NTQzIDAgMCA4Ljk1NDMgMCAyMEMwIDMxLjA0NTcgOC45NTQzIDQwIDIwIDQwQzMxLjA0NTcgNDAgNDAgMzEuMDQ1NyA0MCAyMFoiIGZpbGw9InVybCgjcGFpbnQxX3JhZGlhbF8yMzU4XzMyMSkiLz4KPC9nPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzIzNThfMzIxIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDI1Ljk4MzUgOS43NDI5OSkgc2NhbGUoMzAuMTE2MykiPgo8c3RvcCBvZmZzZXQ9IjAuMTU2MjUiIHN0b3AtY29sb3I9IiNEQ0M4RDAiLz4KPHN0b3Agb2Zmc2V0PSIwLjMwMjA4MyIgc3RvcC1jb2xvcj0iIzc4QzhDRiIvPgo8c3RvcCBvZmZzZXQ9IjAuNDI3MDgzIiBzdG9wLWNvbG9yPSIjNEQ5NTlFIi8+CjxzdG9wIG9mZnNldD0iMC41NTcyOTIiIHN0b3AtY29sb3I9IiMzMDVFQjkiLz4KPHN0b3Agb2Zmc2V0PSIwLjc5Njg3NSIgc3RvcC1jb2xvcj0iIzMxMUYxMiIvPgo8c3RvcCBvZmZzZXQ9IjAuOTA2MjUiIHN0b3AtY29sb3I9IiM2ODQyMzIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkQxQzEzIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF8yMzU4XzMyMSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNS45ODM1IDkuNzQyOTkpIHNjYWxlKDMwLjExNjMpIj4KPHN0b3Agb2Zmc2V0PSIwLjA2NzcwODMiIHN0b3AtY29sb3I9IiNEQ0Y4Q0YiLz4KPHN0b3Agb2Zmc2V0PSIwLjI1IiBzdG9wLWNvbG9yPSIjRDRGNEFCIi8+CjxzdG9wIG9mZnNldD0iMC40NzM5NTgiIHN0b3AtY29sb3I9IiNBNEYwMjgiLz4KPHN0b3Agb2Zmc2V0PSIwLjg4MDIwOCIgc3RvcC1jb2xvcj0iIzFEQUM0NSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1MEM4NkIiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMzU4XzMyMSI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                rpcUrls: ["https://sepolia.rpc.zora.energy"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    scroll: {
        mainnet: {
            chainId: 534352,
            base: "evm",
            chainName: "Scroll",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEVHcEwXBwYTAAUiExIjFxVwZV0rHxwGAgIBAAAfERAKAAAYCQrLv68WAACNgneonI8BAAD/+OP/9eCCd23two3//umRhnryx5H77dmwpJbj1cR5bmbguIbt38ydkYUkFhU9LiVQRkDWybjOwbHGoXZYTUfZsoJhVk/AtKWjhGAS31C8AAAAEHRSTlMApeEwJf4Oy+4/wWTod9lO/NSV9AAAANpJREFUKJG10duSgjAQRdGg3HRG7W5uUQyBIJb+/w8OMQJpdR7dr6s4SQUhvtlum/gF8UJr0Fnp121niyFDVnFMZwy6AlFKehJJ8hBu2EZETeYyxNBgAxLLyNUzTI94gnG1cCHDQJPFaTZr0EORDmqcbepnHOO9+nd27GBn68do3b9iuJz5Gaf3IcJ3PC2pX45Uglf0gl2pujY/P7rohOMwKAmXKrdVV1izM01rCn13mFfw4z0D9PZfzV+eYePtJtrgeGblurYr/0YisZfU021XMUMRbpZC8c3+AGdfHbhD7NFQAAAAAElFTkSuQmCC",
            rpcUrls: [
                "https://scroll-mainnet.chainstacklabs.com",
                "https://scroll.blockpi.network/v1/rpc/public",
                "https://scroll-mainnet.rpc.grove.city/v1/a7a7c8e2",
                "https://scroll.drpc.org",
                "https://scroll-mainnet.public.blastapi.io",
                "https://rpc.ankr.com/scroll",
                "https://rpc.scroll.io",
                "https://rpc-scroll.icecreamswap.com",
                "https://1rpc.io/scroll",
            ],
            blockExplorerUrls: ["https://scroll.io/rollupscan"],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
        },
        testnet: {
            sepolia: {
                chainId: 534351,
                base: "evm",
                chainName: "Scroll Sepolia",
                logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEVHcEwXBwYTAAUiExIjFxVwZV0rHxwGAgIBAAAfERAKAAAYCQrLv68WAACNgneonI8BAAD/+OP/9eCCd23two3//umRhnryx5H77dmwpJbj1cR5bmbguIbt38ydkYUkFhU9LiVQRkDWybjOwbHGoXZYTUfZsoJhVk/AtKWjhGAS31C8AAAAEHRSTlMApeEwJf4Oy+4/wWTod9lO/NSV9AAAANpJREFUKJG10duSgjAQRdGg3HRG7W5uUQyBIJb+/w8OMQJpdR7dr6s4SQUhvtlum/gF8UJr0Fnp121niyFDVnFMZwy6AlFKehJJ8hBu2EZETeYyxNBgAxLLyNUzTI94gnG1cCHDQJPFaTZr0EORDmqcbepnHOO9+nd27GBn68do3b9iuJz5Gaf3IcJ3PC2pX45Uglf0gl2pujY/P7rohOMwKAmXKrdVV1izM01rCn13mFfw4z0D9PZfzV+eYePtJtrgeGblurYr/0YisZfU021XMUMRbpZC8c3+AGdfHbhD7NFQAAAAAElFTkSuQmCC",
                rpcUrls: [
                    "https://scroll-sepolia.blockpi.network/v1/rpc/public",
                    "https://sepolia-rpc.scroll.io",
                    "https://scroll-testnet.rpc.grove.city/v1/a7a7c8e2",
                    "https://rpc.ankr.com/scroll_sepolia_testnet",
                    "https://scroll-testnet-public.unifra.io",
                    "https://scroll-sepolia.drpc.org",
                ],
                blockExplorerUrls: ["https://sepolia.scrollscan.com/"],
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                },
            },
        },
    },
    solana: {
        mainnet: {
            chainId: 101,
            chainName: "Solana",
            base: "svm",
            type: "mainnet-beta",
            logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSJibGFjayIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjI5OF8yOTUpIj4KPHBhdGggZD0iTTE1OC43ODEgMzE2LjI3OEMxNjAuNTE5IDMxNC41NCAxNjIuOTA5IDMxMy41MjYgMTY1LjQ0MyAzMTMuNTI2SDM5NS4yOTNDMzk5LjQ5MyAzMTMuNTI2IDQwMS41OTMgMzE4LjU5NiAzOTguNjI0IDMyMS41NjVMMzUzLjIxOSAzNjYuOTdDMzUxLjQ4MSAzNjguNzA4IDM0OS4wOTEgMzY5LjcyMSAzNDYuNTU3IDM2OS43MjFIMTE2LjcwN0MxMTIuNTA3IDM2OS43MjEgMTEwLjQwNyAzNjQuNjUyIDExMy4zNzYgMzYxLjY4M0wxNTguNzgxIDMxNi4yNzhaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjI5OF8yOTUpIi8+CjxwYXRoIGQ9Ik0xNTguNzgxIDE0Ni43NTJDMTYwLjU5MSAxNDUuMDE0IDE2Mi45ODEgMTQ0IDE2NS40NDMgMTQ0SDM5NS4yOTNDMzk5LjQ5MyAxNDQgNDAxLjU5MyAxNDkuMDY5IDM5OC42MjQgMTUyLjAzOEwzNTMuMjE5IDE5Ny40NDNDMzUxLjQ4MSAxOTkuMTgxIDM0OS4wOTEgMjAwLjE5NSAzNDYuNTU3IDIwMC4xOTVIMTE2LjcwN0MxMTIuNTA3IDIwMC4xOTUgMTEwLjQwNyAxOTUuMTI2IDExMy4zNzYgMTkyLjE1N0wxNTguNzgxIDE0Ni43NTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjI5OF8yOTUpIi8+CjxwYXRoIGQ9Ik0zNTMuMjE5IDIzMC45NzNDMzUxLjQ4MSAyMjkuMjM1IDM0OS4wOTEgMjI4LjIyMSAzNDYuNTU3IDIyOC4yMjFIMTE2LjcwN0MxMTIuNTA3IDIyOC4yMjEgMTEwLjQwNyAyMzMuMjkgMTEzLjM3NiAyMzYuMjU5TDE1OC43ODEgMjgxLjY2NEMxNjAuNTE5IDI4My40MDIgMTYyLjkwOSAyODQuNDE2IDE2NS40NDMgMjg0LjQxNkgzOTUuMjkzQzM5OS40OTMgMjg0LjQxNiA0MDEuNTkzIDI3OS4zNDcgMzk4LjYyNCAyNzYuMzc4TDM1My4yMTkgMjMwLjk3M1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yMjk4XzI5NSkiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIyOThfMjk1IiB4MT0iMzczLjMzNiIgeTE9IjExNi44NzYiIHgyPSIyMTQuMjYxIiB5Mj0iNDIxLjU2NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBGRkEzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMjI5OF8yOTUiIHgxPSIzMDMuNzgiIHkxPSI4MC41NjIyIiB4Mj0iMTQ0LjcwNSIgeTI9IjM4NS4yNTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwRkZBMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzIyOThfMjk1IiB4MT0iMzM4LjMzNiIgeTE9Ijk4LjYwNDEiIHgyPSIxNzkuMjYyIiB5Mj0iNDAzLjI5NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBGRkEzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIyOThfMjk1Ij4KPHJlY3Qgd2lkdGg9IjI4OCIgaGVpZ2h0PSIyMjUuNzIyIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyIDE0NCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
            rpcUrls: ["https://api.mainnet-beta.solana.com"],
            nativeCurrency: {
                name: "Solana",
                symbol: "SOL",
                decimals: 9,
            },
        },
        testnet: {
            testnet: {
                chainId: 102,
                chainName: "Solana Testnet",
                base: "svm",
                type: "testnet",
                logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSJibGFjayIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjI5OF8yOTUpIj4KPHBhdGggZD0iTTE1OC43ODEgMzE2LjI3OEMxNjAuNTE5IDMxNC41NCAxNjIuOTA5IDMxMy41MjYgMTY1LjQ0MyAzMTMuNTI2SDM5NS4yOTNDMzk5LjQ5MyAzMTMuNTI2IDQwMS41OTMgMzE4LjU5NiAzOTguNjI0IDMyMS41NjVMMzUzLjIxOSAzNjYuOTdDMzUxLjQ4MSAzNjguNzA4IDM0OS4wOTEgMzY5LjcyMSAzNDYuNTU3IDM2OS43MjFIMTE2LjcwN0MxMTIuNTA3IDM2OS43MjEgMTEwLjQwNyAzNjQuNjUyIDExMy4zNzYgMzYxLjY4M0wxNTguNzgxIDMxNi4yNzhaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjI5OF8yOTUpIi8+CjxwYXRoIGQ9Ik0xNTguNzgxIDE0Ni43NTJDMTYwLjU5MSAxNDUuMDE0IDE2Mi45ODEgMTQ0IDE2NS40NDMgMTQ0SDM5NS4yOTNDMzk5LjQ5MyAxNDQgNDAxLjU5MyAxNDkuMDY5IDM5OC42MjQgMTUyLjAzOEwzNTMuMjE5IDE5Ny40NDNDMzUxLjQ4MSAxOTkuMTgxIDM0OS4wOTEgMjAwLjE5NSAzNDYuNTU3IDIwMC4xOTVIMTE2LjcwN0MxMTIuNTA3IDIwMC4xOTUgMTEwLjQwNyAxOTUuMTI2IDExMy4zNzYgMTkyLjE1N0wxNTguNzgxIDE0Ni43NTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjI5OF8yOTUpIi8+CjxwYXRoIGQ9Ik0zNTMuMjE5IDIzMC45NzNDMzUxLjQ4MSAyMjkuMjM1IDM0OS4wOTEgMjI4LjIyMSAzNDYuNTU3IDIyOC4yMjFIMTE2LjcwN0MxMTIuNTA3IDIyOC4yMjEgMTEwLjQwNyAyMzMuMjkgMTEzLjM3NiAyMzYuMjU5TDE1OC43ODEgMjgxLjY2NEMxNjAuNTE5IDI4My40MDIgMTYyLjkwOSAyODQuNDE2IDE2NS40NDMgMjg0LjQxNkgzOTUuMjkzQzM5OS40OTMgMjg0LjQxNiA0MDEuNTkzIDI3OS4zNDcgMzk4LjYyNCAyNzYuMzc4TDM1My4yMTkgMjMwLjk3M1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yMjk4XzI5NSkiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIyOThfMjk1IiB4MT0iMzczLjMzNiIgeTE9IjExNi44NzYiIHgyPSIyMTQuMjYxIiB5Mj0iNDIxLjU2NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBGRkEzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMjI5OF8yOTUiIHgxPSIzMDMuNzgiIHkxPSI4MC41NjIyIiB4Mj0iMTQ0LjcwNSIgeTI9IjM4NS4yNTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwRkZBMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzIyOThfMjk1IiB4MT0iMzM4LjMzNiIgeTE9Ijk4LjYwNDEiIHgyPSIxNzkuMjYyIiB5Mj0iNDAzLjI5NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBGRkEzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIyOThfMjk1Ij4KPHJlY3Qgd2lkdGg9IjI4OCIgaGVpZ2h0PSIyMjUuNzIyIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyIDE0NCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                rpcUrls: ["https://api.testnet.solana.com/"],
                nativeCurrency: {
                    name: "Solana",
                    symbol: "SOL",
                    decimals: 9,
                },
            },
            devnet: {
                chainId: 103,
                chainName: "Solana Devnet",
                base: "svm",
                type: "devnet",
                logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSJibGFjayIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjI5OF8yOTUpIj4KPHBhdGggZD0iTTE1OC43ODEgMzE2LjI3OEMxNjAuNTE5IDMxNC41NCAxNjIuOTA5IDMxMy41MjYgMTY1LjQ0MyAzMTMuNTI2SDM5NS4yOTNDMzk5LjQ5MyAzMTMuNTI2IDQwMS41OTMgMzE4LjU5NiAzOTguNjI0IDMyMS41NjVMMzUzLjIxOSAzNjYuOTdDMzUxLjQ4MSAzNjguNzA4IDM0OS4wOTEgMzY5LjcyMSAzNDYuNTU3IDM2OS43MjFIMTE2LjcwN0MxMTIuNTA3IDM2OS43MjEgMTEwLjQwNyAzNjQuNjUyIDExMy4zNzYgMzYxLjY4M0wxNTguNzgxIDMxNi4yNzhaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjI5OF8yOTUpIi8+CjxwYXRoIGQ9Ik0xNTguNzgxIDE0Ni43NTJDMTYwLjU5MSAxNDUuMDE0IDE2Mi45ODEgMTQ0IDE2NS40NDMgMTQ0SDM5NS4yOTNDMzk5LjQ5MyAxNDQgNDAxLjU5MyAxNDkuMDY5IDM5OC42MjQgMTUyLjAzOEwzNTMuMjE5IDE5Ny40NDNDMzUxLjQ4MSAxOTkuMTgxIDM0OS4wOTEgMjAwLjE5NSAzNDYuNTU3IDIwMC4xOTVIMTE2LjcwN0MxMTIuNTA3IDIwMC4xOTUgMTEwLjQwNyAxOTUuMTI2IDExMy4zNzYgMTkyLjE1N0wxNTguNzgxIDE0Ni43NTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjI5OF8yOTUpIi8+CjxwYXRoIGQ9Ik0zNTMuMjE5IDIzMC45NzNDMzUxLjQ4MSAyMjkuMjM1IDM0OS4wOTEgMjI4LjIyMSAzNDYuNTU3IDIyOC4yMjFIMTE2LjcwN0MxMTIuNTA3IDIyOC4yMjEgMTEwLjQwNyAyMzMuMjkgMTEzLjM3NiAyMzYuMjU5TDE1OC43ODEgMjgxLjY2NEMxNjAuNTE5IDI4My40MDIgMTYyLjkwOSAyODQuNDE2IDE2NS40NDMgMjg0LjQxNkgzOTUuMjkzQzM5OS40OTMgMjg0LjQxNiA0MDEuNTkzIDI3OS4zNDcgMzk4LjYyNCAyNzYuMzc4TDM1My4yMTkgMjMwLjk3M1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yMjk4XzI5NSkiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIyOThfMjk1IiB4MT0iMzczLjMzNiIgeTE9IjExNi44NzYiIHgyPSIyMTQuMjYxIiB5Mj0iNDIxLjU2NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBGRkEzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMjI5OF8yOTUiIHgxPSIzMDMuNzgiIHkxPSI4MC41NjIyIiB4Mj0iMTQ0LjcwNSIgeTI9IjM4NS4yNTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwRkZBMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzIyOThfMjk1IiB4MT0iMzM4LjMzNiIgeTE9Ijk4LjYwNDEiIHgyPSIxNzkuMjYyIiB5Mj0iNDAzLjI5NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBGRkEzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIyOThfMjk1Ij4KPHJlY3Qgd2lkdGg9IjI4OCIgaGVpZ2h0PSIyMjUuNzIyIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyIDE0NCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                rpcUrls: ["https://api.devnet.solana.com/"],
                nativeCurrency: {
                    name: "Solana",
                    symbol: "Sol",
                    decimals: 9,
                },
            },
        },
    },
};

export function parseChainId(chain: number | string | Chain): number {
    if (!chain) return 0;
    return typeof chain === "string"
        ? chain.startsWith("0x")
            ? Number(chain)
            : parseInt(chain)
        : typeof chain === "number"
            ? chain
            : parseChainId(chain?.chainId);
}

export function formatChainId(chain: number | string | Chain): string {
    if (!chain) return chain as any;
    return typeof chain === "string"
        ? chain.startsWith("0x")
            ? chain
            : formatChainId(parseInt(chain))
        : typeof chain === "number"
            ? `0x${chain?.toString(16)}`
            : formatChainId(chain?.chainId);
}

export function getChain(
    chainName: string,
):
    | { mainnet?: Chain | undefined; testnet?: { [key: string]: Chain | undefined } | undefined; devnet?: { [key: string]: Chain | undefined } | undefined }
    | undefined {
    return Object.values(chainlist).find((network) => network?.mainnet?.chainName?.toLowerCase()?.includes(chainName));
}

export function getChainsByType(type: "mainnet" | "testnet" | "devnet"): Chain[] {
    return Object.values(chainlist)
        .flatMap((network) => (type === "mainnet" ? network[type] : typeof network?.[type] === "object" ? Object.values(network?.[type]) : network?.[type])) // Access the network[type] object
        .filter((network): network is Chain => Boolean(network));
}

export function getChainByName(chainName: string): Chain | undefined {
    return Object.values(chainlist)
        .flatMap((network) => [network?.mainnet, ...(network?.testnet ? Object.values(network?.testnet) : [])])
        .filter((f) => f)
        .find((f) => f?.chainName?.toLowerCase()?.includes(chainName));
}

export function getChainById(chainId: number | string): Chain | undefined {
    chainId = parseChainId(chainId) as number;
    return Object.values(chainlist)
        .flatMap((network) => [network?.mainnet, ...(network?.testnet ? Object.values(network?.testnet) : [])])
        .filter((f) => f)
        .find((f) => f?.chainId === chainId);
}

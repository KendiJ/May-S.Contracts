import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig({ path: `./.env` });

if (
    !process.env.PRIVATE_KEY ||
    !process.env.JSON_RPC

) {
    throw new Error(
        `Please provide your PRIVATE_KEY or PRIVATE_KEY or JSON_RPC or BSC_SCAN_API in .env in the project root`
    );
}

module.exports = {
    networks: {
        localhost: {
            url: process.env.JSON_RPC,
            chainId: 97,
            gasPrice: 10 * 10 ** 9,
            accounts: [
                process.env.PRIVATE_KEY.startsWith("0x")
                    ? process.env.PRIVATE_KEY
                    : process.env.PRIVATE_KEY,
            ],
        },
        bsc: {
            url: process.env.JSON_RPC,
            chainId: 97,
            gasPrice: 5 * 10 ** 9,
            accounts: [
                process.env.PRIVATE_KEY!.startsWith("0x")
                    ? process.env.PRIVATE_KEY
                    : `0x${process.env.PRIVATE_KEY}`,
            ],
        },
    },
    forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/<key>",
    },
    etherscan: {
        apiKey: process.env.BSC_SCAN_API,
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
};


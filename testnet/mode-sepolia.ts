import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const ModeSepolia: EVMChainInfo = {
  name: "Mode Sepolia",
  icon: "mode",
  rpc: ["https://sepolia.mode.network"],
  nativeCurrency: {
    name: "Mode ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 919,
  explorers: [
    {
      name: "Mode Sepolia Routescan",
      url: "https://testnet.modescan.io",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

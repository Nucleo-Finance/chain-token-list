import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const OptimismSepolia: EVMChainInfo = {
  name: "Optimism Sepolia",
  icon: "optimism",
  rpc: ["https://sepolia.optimism.io", "https://optimism-sepolia.drpc.org"],
  nativeCurrency: {
    name: "Optimism ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 11155420,
  explorers: [
    {
      name: "Optimism Sepolia Etherscan",
      url: "https://sepolia-optimism.etherscan.io",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

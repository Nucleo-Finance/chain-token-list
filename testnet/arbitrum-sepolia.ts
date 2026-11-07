import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const ArbitrumSepolia: EVMChainInfo = {
  name: "Arbitrum Sepolia",
  icon: "arbitrum",
  rpc: ["https://sepolia-rollup.arbitrum.io/rpc"],
  nativeCurrency: {
    name: "Arbitrum ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 421614,
  explorers: [
    {
      name: "Arbitrum Sepolia Etherscan",
      url: "https://sepolia.arbiscan.io/",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

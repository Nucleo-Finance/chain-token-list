import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const BaseSepolia: EVMChainInfo = {
  name: "Base Sepolia",
  icon: "base",
  rpc: ["https://sepolia.base.org", "https://base-sepolia-rpc.publicnode.com"],
  nativeCurrency: {
    name: "Base ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 84532,
  explorers: [
    {
      name: "Base Sepolia Etherscan",
      url: "https://sepolia.basescan.org",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

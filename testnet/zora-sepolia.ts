import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const ZoraSepolia: EVMChainInfo = {
  name: "Zora Sepolia",
  icon: "zora",
  rpc: ["https://sepolia.rpc.zora.energy"],
  nativeCurrency: {
    name: "Zora ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 999999999,
  explorers: [
    {
      name: "Zora Sepolia Testnet Network Explorer",
      url: "https://sepolia.explorer.zora.energy",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const ScrollSepolia: EVMChainInfo = {
  name: "Scroll Sepolia",
  icon: "scroll",
  rpc: [
    "https://sepolia-rpc.scroll.io",
    "https://rpc.ankr.com/scroll_sepolia_testnet",
    "https://scroll-sepolia.chainstacklabs.com",
  ],
  nativeCurrency: {
    name: "Scroll ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 534351,
  explorers: [
    {
      name: "Scroll Sepolia Etherscan",
      url: "https://sepolia.scrollscan.com",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

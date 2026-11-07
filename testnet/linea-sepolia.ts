import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const LineaSepolia: EVMChainInfo = {
  name: "Linea Sepolia",
  icon: "linea",
  rpc: [
    "https://rpc.sepolia.linea.build",
    "https://linea-sepolia.infura.io/v3/${INFURA_API_KEY}",
    "https://linea-sepolia-rpc.publicnode.com",
  ],
  nativeCurrency: {
    name: "Linea ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 59141,
  explorers: [
    {
      name: "Linea Sepolia Etherscan",
      url: "https://sepolia.lineascan.build",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

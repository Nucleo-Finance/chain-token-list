import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const AvalancheFuji: EVMChainInfo = {
  name: "Avalanche Fuji",
  icon: "avalanche",
  rpc: [
    "https://api.avax-test.network/ext/bc/C/rpc",
    "https://avalanche-fuji-c-chain-rpc.publicnode.com",
  ],
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 43113,
  explorers: [
    {
      name: "Avalanche Fuji Etherscan",
      url: "https://testnet.snowscan.xyz",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

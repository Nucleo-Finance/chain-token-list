import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const WorldchainSepolia: EVMChainInfo = {
  name: "Worldchain Sepolia",
  icon: "scroll",
  rpc: [
    "https://worldchain-sepolia.g.alchemy.com/public",
    "https://4801.rpc.thirdweb.com",
    "https://worldchain-sepolia.gateway.tenderly.co",
  ],
  nativeCurrency: {
    name: "Worldchain ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 4801,
  explorers: [
    {
      name: "Worldchain Sepolia Etherscan",
      url: "https://sepolia.worldscan.org",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const PolygonAmoy: EVMChainInfo = {
  name: "Polygon Amoy",
  icon: "polygon",
  rpc: [
    "https://rpc-amoy.polygon.technology",
    "https://polygon-amoy-bor-rpc.publicnode.com",
  ],
  nativeCurrency: {
    name: "Polygon POL",
    symbol: "POL",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 80002,
  explorers: [
    {
      name: "Polygon Amoy Etherscan",
      url: "https://testnet.modescan.io",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

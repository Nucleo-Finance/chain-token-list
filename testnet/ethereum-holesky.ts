import type { EVMChainInfo } from "../chains";
import { NATIVE_TOKEN_ADDRESS } from "../tokens";

export const EthereumHolesky: EVMChainInfo = {
  name: "Ethereum Holesky",
  icon: "ethereum",
  rpc: [
    "https://rpc.holesky.ethpandaops.io",
    "https://ethereum-holesky-rpc.publicnode.com",
    "https://holesky.drpc.org",
    "https://rpc-holesky.rockx.com",
  ],
  nativeCurrency: {
    name: "Holesky ETH",
    symbol: "ETH",
    decimals: 18,
  },
  feeTokenAddress: NATIVE_TOKEN_ADDRESS,
  chainId: 17000,
  explorers: [
    {
      name: "Holesky Etherscan",
      url: "https://holesky.etherscan.io",
    },
  ],
  vm: "EVM",
  tokens: [],
  messagingBridges: [],
};

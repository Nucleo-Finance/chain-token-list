import type { BridgeInfo } from "./bridges";
import { ArbitrumSepolia } from "./testnet/arbitrum-sepolia";
import { AvalancheFuji } from "./testnet/avalanche-fuji";
import { BaseSepolia } from "./testnet/base-sepolia";
import { EthereumHolesky } from "./testnet/ethereum-holesky";
import { LineaSepolia } from "./testnet/linea-sepolia";
import { ModeSepolia } from "./testnet/mode-sepolia";
import { OptimismSepolia } from "./testnet/optimism-sepolia";
import { PolygonAmoy } from "./testnet/polygon-amoy";
import { ScrollSepolia } from "./testnet/scroll-sepolia";
import { WorldchainSepolia } from "./testnet/worldchain-sepolia";
import { ZoraSepolia } from "./testnet/zora-sepolia";
import type { TokenInfo } from "./tokens";

export type EVMChainInfo = {
  name: string;
  icon: string;
  rpc: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  feeTokenAddress: string;
  chainId: number;
  explorers?: {
    name: string;
    url: string;
  }[];

  vm: "EVM" | "SVM";
  tokens: TokenInfo[];
  messagingBridges: BridgeInfo[];
};

export const TESTNET_CHAINS: EVMChainInfo[] = [
  ArbitrumSepolia,
  AvalancheFuji,
  BaseSepolia,
  EthereumHolesky,
  LineaSepolia,
  ModeSepolia,
  OptimismSepolia,
  PolygonAmoy,
  ScrollSepolia,
  WorldchainSepolia,
  ZoraSepolia,
];

export const MAINNET_CHAINS: EVMChainInfo[] = [];

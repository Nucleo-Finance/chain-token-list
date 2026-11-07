export type BridgeInfo =
  | HyperlaneBridgeInfo
  | LayerZeroBridgeInfo
  | WormholeBridgeInfo;

export type HyperlaneBridgeInfo = {
  name: "hyperlane";
  domainId: number;
  mailbox: string;
};

export type LayerZeroBridgeInfo = {
  name: "layerzero";
  endpointId: number;
  endpoint: string;
};

export type WormholeBridgeInfo = {
  name: "wormhole";
  chainId: number;
  coreContract: string;
};

build: build-testnet build-mainnet

build-testnet:
	bun run index.ts --testnet

build-mainnet:
	bun run index.ts --mainnet
async function main() {
  const args = Bun.argv;
  const isTestnet = args.includes("--testnet");

  
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

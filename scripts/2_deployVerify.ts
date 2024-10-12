import { ethers } from "hardhat";

async function main() {
  // verify Stablecoin
  console.log(' - Verifying Stablecoin contract ... ');
  await run("verify:verify", {
    address              : "", // your deployed stablecoin proxy address
    contract             : "contracts/Stablecoin.sol:Stablecoin", // <path-to-contract>:<contract-name>
    constructorArguments : [],
  });

  console.log(' - Done.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



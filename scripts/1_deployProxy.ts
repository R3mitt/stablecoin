import { ethers, upgrades } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("Stablecoin");

  console.log(' - Deploying proxy ... ');
  const instance = await upgrades.deployProxy(ContractFactory);
  await instance.deployed();

  console.log(` - Done. Proxy deployed to ${instance.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



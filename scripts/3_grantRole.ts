import { ethers } from "hardhat";



async function main() {
  const proxyAddress = ""; // your deployed stablecoin proxy address
  const adminAddress = ""; // your admin wallet address
  const MINTER       = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  const Stablecoin = await ethers.getContractFactory("Stablecoin");

  // grant minter role to admin wallet
  console.log(' - Grant MINTER role to '+adminAddress+" ... ");
  const sc = Stablecoin.attach(proxyAddress as string);      
  const exec = await sc.grantRole(MINTER, adminAddress);
  await exec.wait();

  console.log(' - Done. ');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



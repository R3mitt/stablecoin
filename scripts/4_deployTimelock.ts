import { ethers, upgrades } from "hardhat";



const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async function main() {
  const TimeLock = await ethers.getContractFactory("TimeLock");

  console.log(' - Deploying timelock ... ');
  const minimumDelayinSeconds: number =  172800; // 2 days
  const adminAddress       = ""; // your admin wallet address
  const proposer: string[] = [adminAddress as string];
  const executor: string[] = [adminAddress as string];
  const admin: string      = adminAddress as string;
  const instance = await TimeLock.deploy(minimumDelayinSeconds, proposer, executor, admin);
  await instance.deployed();

  console.log(` - Done. Timelock deployed to ${instance.address}`);

  await delay(30000);

  console.log(' - Verifying timelock ... ');
  await run("verify:verify", {
    address              : instance.address,
    contract             : "contracts/Timelock.sol:TimeLock", // <path-to-contract>:<contract-name>
    constructorArguments : [minimumDelayinSeconds, proposer, executor, admin],
  });
  console.log(' - Done. ');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



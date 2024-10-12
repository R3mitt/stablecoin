import { ethers } from "hardhat";



async function main() {
  const proxyAddress = "", // your deployed stablecoin proxy address

  const platformFeeRecipient = "";  // wallet address to receive bridging fee
  const burnBridgeFee        = "0"; // set fee accordingly
  const mintBridgeFee        = "0"; // set fee accordingly

  const Stablecoin = await ethers.getContractFactory("Stablecoin");

  // set platform fee info
  console.log(' - Set platformFeeRecipient: '+platformFeeRecipient+
    ', burnBridgeFee: '+burnBridgeFee+
    ', mintBridgeFee: '+mintBridgeFee+
    ' ... '
  );
  const sc = Stablecoin.attach(proxyAddress as string);
  const exec = await sc.setPlatformFeeInfo(platformFeeRecipient, burnBridgeFee, mintBridgeFee);
  await exec.wait();

  console.log(' - Done. ');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



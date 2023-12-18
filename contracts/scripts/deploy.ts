import { ethers } from "hardhat";

async function main() {
  const bananaStock = 100;

  const lock = await ethers.deployContract("BananaDapp", [bananaStock]);

  await lock.waitForDeployment();

  console.log(
    `Deployed to ${lock.target} with a banana stock of ${bananaStock}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

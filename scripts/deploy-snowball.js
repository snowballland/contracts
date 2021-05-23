// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { parseEther } = require("ethers/lib/utils");
const config = require('../config/config');

// Farm
const devAddr = config.devAddr;
const sbtPerBlock = config.sbtPerBlock;
const startBlock = config.startBlock;
const bonusLockupBps = config.bonusLockupBps;
const bonusEndBlock = config.bonusEndBlock;
const bonusMultiplier = config.bonusMultiplier

// Token
const minter = config.minter;
const startReleaseBlock = config.startReleaseBlock;
const endReleaseBlock = config.endReleaseBlock;

async function main() {
  const SnowballLandToken = await hre.ethers.getContractFactory("SnowballLandToken");
  const snowballLandToken = await SnowballLandToken.deploy(startReleaseBlock, endReleaseBlock, minter);
  await snowballLandToken.deployed();
  console.log("SnowballLandToken deployed to:", snowballLandToken.address);

  const SnowballLandFarm = await hre.ethers.getContractFactory("SnowballLandFarm");
  const snowballLandFarm = await SnowballLandFarm.deploy(
    snowballLandToken.address, devAddr, parseEther(sbtPerBlock.toString()), startBlock, bonusLockupBps, bonusEndBlock
  );
  await snowballLandFarm.deployed();
  console.log("SnowballLandFarm deployed to:", snowballLandFarm.address);
  console.log("- Constructor Args -");
  console.log(snowballLandToken.address);
  console.log(devAddr);
  console.log(hre.ethers.utils.hexlify(parseEther(sbtPerBlock.toString())));
  console.log(hre.ethers.utils.hexlify(startBlock));
  console.log(hre.ethers.utils.hexlify(bonusLockupBps));
  console.log(hre.ethers.utils.hexlify(bonusEndBlock));
  console.log("--------------------");

  await snowballLandFarm.setBonus(bonusMultiplier, bonusEndBlock, bonusLockupBps);
  console.log("SnowballLandFarm bonus set");

  await snowballLandToken.transferOwnership(snowballLandFarm.address);
  console.log("snowballLandToken ownership transferred to snowballLandFarm");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

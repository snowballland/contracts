// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { parseEther } = require("ethers/lib/utils");
const config = require('../config/config-str2-banana'); // convert to your config path

const addresses = config.addresses;
const pid = config.pid;
const isCAKEStaking = config.isCAKEStaking;
const isSameAssetDeposit = config.isSameAssetDeposit;
const isAutoComp = config.isAutoComp;
const earnedToSbtPath = config.earnedToSbtPath;
const earnedToToken0Path = config.earnedToToken0Path;
const earnedToToken1Path = config.earnedToToken1Path;
const token0ToEarnedPath = config.token0ToEarnedPath;
const token1ToEarnedPath = config.token1ToEarnedPath;
const controllerFee = config.controllerFee;
const buyBackRate = config.buyBackRate;
const entranceFeeFactor = config.entranceFeeFactor;
const withdrawFeeFactor = config.withdrawFeeFactor;
const allocPoint = config.allocPoint;
const isWithUpdate = config.isWithUpdate;
const contractName = config.contractName;

async function main() {
  const network = hre.network.name;
  /*   if (network !== 'mainnet') {
      const MockToken = await hre.ethers.getContractFactory("MockToken");  
      const mockToken = await MockToken.deploy();
      wantAddress = mockToken.address;
      console.log("mockToken (stakeToken) deployed to:", mockToken.address);
      const [deployer] = await ethers.getSigners();
      await mockToken.approve(snowballLandFarmAddress, parseEther('1000'));
      await mockToken.mint(deployer.address, parseEther('1000'));
      console.log("Minted", 1000, "mockToken to deployer:", deployer.address);
    } */

  const StratSbt2 = await hre.ethers.getContractFactory(contractName);
  const stratSbt2 = await StratSbt2.deploy(
    addresses, pid, isCAKEStaking, isSameAssetDeposit, isAutoComp, earnedToSbtPath,
    earnedToToken0Path, earnedToToken1Path, token0ToEarnedPath, token1ToEarnedPath,
    controllerFee, buyBackRate, entranceFeeFactor, withdrawFeeFactor
  );
  await stratSbt2.deployed();
  console.log(contractName, " deployed to:", stratSbt2.address);
  console.log("- Constructor Args -");
  console.log(addresses);
  console.log(hre.ethers.utils.hexlify(pid));
  console.log(isCAKEStaking);
  console.log(isSameAssetDeposit);
  console.log(isAutoComp);
  console.log(earnedToSbtPath);
  console.log(earnedToToken0Path);
  console.log(earnedToToken1Path);
  console.log(token0ToEarnedPath);
  console.log(token1ToEarnedPath);
  console.log(controllerFee);
  console.log(buyBackRate);
  console.log(entranceFeeFactor);
  console.log(withdrawFeeFactor);
  console.log("--------------------"); 

  /*   // Add to snow farm
    if (network !== 'mainnet') {
      sbtBnbStakeToken = wantAddress; // wantAddress is mock token here
      console.log("Using mockToken as stakeToken:", sbtBnbStakeToken);
    }*/
    const snowballLandFarm = await hre.ethers.getContractAt("SnowballLandFarm", addresses[2]);
    await snowballLandFarm.addPool(
      allocPoint, addresses[4], isWithUpdate, stratSbt2.address
    )
    console.log("stratSbt added to snowfarm"); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

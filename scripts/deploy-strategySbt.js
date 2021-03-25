// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { parseEther } = require("ethers/lib/utils");
const config = require('../config');

const sbtAddress = config.sbtAddress;
const snowballLandFarmAddress = config.snowballLandFarmAddress;
const isCAKEStaking = config.isCAKEStaking;
const isAutoComp = config.isAutoComp;
const farmContractAddress = config.farmContractAddress;
const pid = config.pid;
let wantAddress = config.wantAddress; // Will be updated to mockToken if non-mainnet
const token0Address = config.token0Address;
const token1Address = config.token1Address;
const earnedAddress = config.earnedAddress;
const uniRouterAddress = config.uniRouterAddress;

const sbtBnbAllocPoint = config.sbtBnbAllocPoint;
let sbtBnbStakeToken = wantAddress; // Will be updated to mockToken if non-mainnet
const sbtBnbWithUpdate = config.sbtBnbWithUpdate;

async function main() {
  const network = hre.network.name;
  if (network !== 'mainnet') {
    const MockToken = await hre.ethers.getContractFactory("MockToken");  
    const mockToken = await MockToken.deploy();
    wantAddress = mockToken.address;
    console.log("mockToken (stakeToken) deployed to:", mockToken.address);
    const [deployer] = await ethers.getSigners();
    await mockToken.approve(snowballLandFarmAddress, parseEther('1000'));
    await mockToken.mint(deployer.address, parseEther('1000'));
    console.log("Minted", 1000, "mockToken to deployer:", deployer.address);
  }

  const StratSbt = await hre.ethers.getContractFactory("StratSbt");
  const stratSbt = await StratSbt.deploy(
    snowballLandFarmAddress, sbtAddress, isCAKEStaking, isAutoComp, farmContractAddress, pid, 
    wantAddress, token0Address, token1Address, earnedAddress, uniRouterAddress,
  );
  await stratSbt.deployed();
  console.log("stratSbt deployed to:", stratSbt.address);
  console.log("- Constructor Args -");
  console.log(snowballLandFarmAddress);
  console.log(sbtAddress);
  console.log(isCAKEStaking);
  console.log(isAutoComp);
  console.log(farmContractAddress);
  console.log(hre.ethers.utils.hexlify(pid));
  console.log(wantAddress);
  console.log(token0Address);
  console.log(token1Address);
  console.log(earnedAddress);
  console.log(uniRouterAddress);
  console.log("--------------------");

  // Add to snow farm
  if (network !== 'mainnet') {
    sbtBnbStakeToken = wantAddress; // wantAddress is mock token here
    console.log("Using mockToken as stakeToken:", sbtBnbStakeToken);
  }
  const snowballLandFarm = await hre.ethers.getContractAt("SnowballLandFarm", snowballLandFarmAddress);
  await snowballLandFarm.addPool(
    sbtBnbAllocPoint, sbtBnbStakeToken, sbtBnbWithUpdate, stratSbt.address
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

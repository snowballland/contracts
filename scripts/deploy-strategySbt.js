// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { parseEther } = require("ethers/lib/utils");
const config = require('../config/config');

const sbtAddress = config.sbtAddress;
const snowballLandFarmAddress = config.snowballLandFarmAddress;
const isCAKEStaking = config.isCAKEStaking;
const isAutoComp = config.isAutoComp;
const farmContractAddress = config.farmContractAddress;
const pid = config.pid;
let wantAddress = config.wantsbtWbnbAddress; // Will be updated to mockToken if non-mainnet
const token0Address = config.token0Address;
const token1Address = config.token1Address;
const earnedAddress = config.earnedAddress;
const uniRouterAddress = config.uniRouterAddress;

const sbtWbnbAllocPoint = config.sbtWbnbAllocPoint;
const wantsbtWbnbAddress = config.wantsbtWbnbAddress; // Will be updated to mockToken if non-mainnet
const sbtWbnbWithUpdate = config.sbtWbnbWithUpdate;

const busdAllocPoint = config.busdAllocPoint;
const wantBusdAddress= config.wantBusdAddress; 
const busdWithUpdate = config.busdWithUpdate;

const wbnbAllocPoint = config.wbnbAllocPoint;
const wantWbnbAddress = config.wantWbnbAddress; 
const wbnbWithUpdate = config.wbnbWithUpdate;
const options = { gasPrice: 5000000000, gasLimit: 200000 };

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

    //---------depoly SBT-WBNB strategy-----------//
  const stratSbt = await StratSbt.deploy(
    snowballLandFarmAddress, sbtAddress, isCAKEStaking, isAutoComp, farmContractAddress, pid, 
    wantsbtWbnbAddress, token0Address, token1Address, earnedAddress, uniRouterAddress,
  );
  await stratSbt.deployed();
  console.log("sbt-wbnb stratSbt deployed to:", stratSbt.address);
  console.log("- Constructor Args -");
  console.log(snowballLandFarmAddress);
  console.log(sbtAddress);
  console.log(isCAKEStaking);
  console.log(isAutoComp);
  console.log(farmContractAddress);
  console.log(hre.ethers.utils.hexlify(pid));
  console.log(wantsbtWbnbAddress);
  console.log(token0Address);
  console.log(token1Address);
  console.log(earnedAddress);
  console.log(uniRouterAddress);
  console.log("--------------------");

  //---------depoly BUSD strategy-----------//
  // const stratSbt2 = await StratSbt.deploy(
  //   snowballLandFarmAddress, sbtAddress, isCAKEStaking, isAutoComp, farmContractAddress, pid, 
  //   wantBusdAddress, token0Address, token1Address, earnedAddress, uniRouterAddress,
  // );
  // await stratSbt2.deployed();
  // console.log("BUSD stratSbt deployed to:", stratSbt2.address);
  // console.log("- Constructor Args -");
  // console.log(wantBusdAddress);

  //---------depoly WBNB strategy-----------//

  // const stratSbt3 = await StratSbt.deploy(
  //   snowballLandFarmAddress, sbtAddress, isCAKEStaking, isAutoComp, farmContractAddress, pid, 
  //   wantWbnbAddress, token0Address, token1Address, earnedAddress, uniRouterAddress,
  // );
  // await stratSbt3.deployed();
  // console.log("Wbnb stratSbt deployed to:", stratSbt3.address);
  // console.log("- Constructor Args -");
  // console.log(wantWbnbAddress);

  // Add to snow farm
  if (network !== 'mainnet') {
    sbtWbnbStakeToken = wantAddress; // wantAddress is mock token here
    console.log("Using mockToken as stakeToken:", sbtWbnbStakeToken);
  }
  const snowballLandFarm = await hre.ethers.getContractAt("SnowballLandFarm", snowballLandFarmAddress);
  await snowballLandFarm.addPool(
    sbtWbnbAllocPoint, wantsbtWbnbAddress, sbtWbnbWithUpdate, stratSbt.address, options
  )
  console.log("sbt-Wbnb stratSbt added to snowfarm");

  // await snowballLandFarm.addPool(
  //   busdAllocPoint, wantBusdAddress, busdWithUpdate, stratSbt2.address, options
  // )
  // console.log("BUSD stratSbt added to snowfarm");

  // await snowballLandFarm.addPool(
  //   wbnbAllocPoint, wantWbnbAddress, wbnbWithUpdate, stratSbt3.address, options
  // )
  // console.log("Wbnb stratSbt added to snowfarm");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

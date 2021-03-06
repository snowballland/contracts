module.exports = {
  // SnowballLand
  devAddr: '0xc957b2cda38e52f9b5cd1bf5ff9512ae850ec793', // TODO: Change to dev address
  minter: '0x939166BA561214c90cFdecff33AcCcE81b2e9542', // TODO: Change to liquidity seeder address
  sbtPerBlock: 0.75,
  startBlock: 7272980, // TODO: Change to intended starting block number 
  bonusLockupBps: 7000, // 70%
  bonusEndBlock: 7676180, // startBlock + 14 * 28800 (14 days) 
  bonusMultiplier: 5, // (4.5-0.75)/0.75 = 5
  startReleaseBlock: 7676180, // bonusEndBlock
  endReleaseBlock: 9692180, // startReleaseBlock + 70 * 28800 (70 days)
  // Strategy (values depend on different cases, hence require changes on deploy)
  sbtAddress: '0x5C4dcBde67fa7cc2098f89e58148e41234A30af4', // TODO: Change to SBT address
  snowballLandFarmAddress: '0xafD5318CF9A817009cC2b7413eef8558A681Db34', // TODO: Change to SnowballLandFarm address
  isCAKEStaking: false, // Strategy dependent
  isAutoComp: false, // Strategy dependent
  farmContractAddress: '0x0000000000000000000000000000000000000000', // Refers to underlying farm contract (pancakeswap masterchef etc)
  pid: 0, // Refers to underlying farm pid
  token0Address: '0x0000000000000000000000000000000000000000', // Refers to token0 deposited token LP
  token1Address: '0x0000000000000000000000000000000000000000', // Refers to token1 deposited token LP
  earnedAddress: '0x0000000000000000000000000000000000000000', // Refers to earned (yielded) token
  uniRouterAddress: '0x0000000000000000000000000000000000000000', // Refers AMM router (pancakeswap etc)
  wantsbtWbnbAddress: '0xadebe0f7f3ef77170d13e125149b72ac54d14d44', // Refers to deposited token
  sbtWbnbAllocPoint: 6000, // Refers farm allocation points
  sbtWbnbWithUpdate: false, // Refers to calling update on pools
  wantBusdAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // Refers to deposited token
  busdAllocPoint: 2000, // Refers farm allocation points
  busdWithUpdate: false, // Refers to calling update on pools
  wantWbnbAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // Refers to deposited token
  wbnbAllocPoint: 2000, // Refers farm allocation points
  wbnbWithUpdate: false, // Refers to calling update on pools
};
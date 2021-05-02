module.exports = {
  // SnowballLand
  devAddr: '0x42176E273474BED9bb34de2Ac4B39b3E8c015D14', // TODO: Change to dev address
  minter: '0x42176E273474BED9bb34de2Ac4B39b3E8c015D14', // TODO: Change to liquidity seeder address
  sbtPerBlock: 0.75,
  startBlock: 7097150, // TODO: Change to intended starting block number  7073150+20*60*20
  bonusLockupBps: 7000, // 70%
  bonusEndBlock: 7125950, // startBlock + 28800 (24 hours)
  bonusMultiplier: 5, // (4.5-0.75)/0.75 = 5
  startReleaseBlock: 7140350, // bonusEndBlock + 14400 (12 hours)
  endReleaseBlock: 7169150, // startReleaseBlock + 28800 (24 hours)
  // Strategy (values depend on different cases, hence require changes on deploy)
  sbtAddress: '0x2f0c723f427c052C611C2B1947F420800dC51BFa', // TODO: Change to SBT address
  snowballLandFarmAddress: '0xFBa43035ab3e83d84B94F24131E7dc6E37047e16', // TODO: Change to SnowballLandFarm address
  isCAKEStaking: false, // Strategy dependent
  isAutoComp: false, // Strategy dependent
  farmContractAddress: '0x0000000000000000000000000000000000000000', // Refers to underlying farm contract (pancakeswap masterchef etc)
  pid: 0, // Refers to underlying farm pid
  token0Address: '0x0000000000000000000000000000000000000000', // Refers to token0 deposited token LP
  token1Address: '0x0000000000000000000000000000000000000000', // Refers to token1 deposited token LP
  earnedAddress: '0x0000000000000000000000000000000000000000', // Refers to earned (yielded) token
  uniRouterAddress: '0x0000000000000000000000000000000000000000', // Refers AMM router (pancakeswap etc)
  wantsbtWbnbAddress: '0xb7c728533914fdab971ef1e7542a03f7b8e2bee7', // Refers to deposited token
  sbtWbnbAllocPoint: 6000, // Refers farm allocation points,totoal Point 10000
  sbtWbnbWithUpdate: false, // Refers to calling update on pools
  wantBusdAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // Refers to deposited token
  busdAllocPoint: 2000, // Refers farm allocation points,totoal Point 10000
  busdWithUpdate: false, // Refers to calling update on pools
  wantWbnbAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // Refers to deposited token
  wbnbAllocPoint: 2000, // Refers farm allocation points,totoal Point 10000
  wbnbWithUpdate: false, // Refers to calling update on pools
};
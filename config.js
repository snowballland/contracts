module.exports = {
  // SnowballLand
  devAddr: '0x0000000000000000000000000000000000000000', // TODO: Change to dev address
  minter: '0x0000000000000000000000000000000000000000', // TODO: Change to liquidity seeder address
  sbtPerBlock: 0.75,
  startBlock: 7134300, // TODO: Change to intended starting block number
  bonusLockupBps: 7000, // 70%
  bonusEndBlock: 7537500, // startBlock + 403200 (14 days)
  bonusMultiplier: 5, // (4.5-0.75)/0.75 = 5
  startReleaseBlock: 8375949, // bonusEndBlock + 838449 (30 days)
  endReleaseBlock: 8575949, // startReleaseBlock + 200000 (7 days)
  // Strategy (values depend on different cases, hence require changes on deploy)
  sbtAddress: '0x0000000000000000000000000000000000000000', // TODO: Change to SBT address
  snowballLandFarmAddress: '0x0000000000000000000000000000000000000000', // TODO: Change to SnowballLandFarm address
  isCAKEStaking: false, // Strategy dependent
  isAutoComp: false, // Strategy dependent
  farmContractAddress: '0x0000000000000000000000000000000000000000', // Refers to underlying farm contract (pancakeswap masterchef etc)
  pid: 0, // Refers to underlying farm pid
  wantAddress: '0x0000000000000000000000000000000000000000', // Refers to deposited token
  token0Address: '0x0000000000000000000000000000000000000000', // Refers to token0 deposited token LP
  token1Address: '0x0000000000000000000000000000000000000000', // Refers to token1 deposited token LP
  earnedAddress: '0x0000000000000000000000000000000000000000', // Refers to earned (yielded) token
  uniRouterAddress: '0x0000000000000000000000000000000000000000', // Refers AMM router (pancakeswap etc)
  sbtBnbAllocPoint: 300, // Refers farm allocation points
  sbtBnbWithUpdate: false, // Refers to calling update on pools
};
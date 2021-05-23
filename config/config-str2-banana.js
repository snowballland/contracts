module.exports = {
  // Strategy2 (values depend on different cases, hence require changes on deploy)
  // PancakeSwap
  // pool cake
  addresses: [
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', //wbnbAddress
    '0x939166BA561214c90cFdecff33AcCcE81b2e9542', //govAddress
    '0x4037b7d049b5CD3044Dad8957204cBa1627621bc', //snowballLandFarmAddress
    '0x23dE6D136ae765f256619c57201FF57C25ACB565', //sbtAddress
    '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95', //wantAddress
    '0x0000000000000000000000000000000000000000', //token0Address
    '0x0000000000000000000000000000000000000000', //token1Address
    '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95', //earnedAddress
    '0x5c8d727b265dbafaba67e050f2f739caeeb4a6f9', //farmContractAddress
    '0x10ed43c718714eb63d5aa57b78b54704e256024e', //uniRouterAddress
    '0x0000000000000000000000000000000000000000', //rewardsAddress
    '0x000000000000000000000000000000000000dEaD', //buyBackAddress
  ],
  pid: 0,
  isCAKEStaking: true, // Strategy dependent
  isSameAssetDeposit: false,
  isAutoComp: true, // Strategy dependent
  earnedToSbtPath:['0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95','0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c','0x23dE6D136ae765f256619c57201FF57C25ACB565'],
  earnedToToken0Path:[],
  earnedToToken1Path:[],
  token0ToEarnedPath:[],
  token1ToEarnedPath:[],
  controllerFee: 0,
  buyBackRate: 3000,
  entranceFeeFactor: 10000,
  withdrawFeeFactor: 10000,
  allocPoint: 0, // Refers farm allocation points,totoal Point 10000
  isWithUpdate: false, // Refers to calling update on pools
  contractName: "StratSbt2_PCS",
};
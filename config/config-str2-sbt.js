module.exports = {
  // Strategy2 (values depend on different cases, hence require changes on deploy)
  // pool sbt
  addresses: [
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', //wbnbAddress
    '0x939166BA561214c90cFdecff33AcCcE81b2e9542', //govAddress
    '0xafD5318CF9A817009cC2b7413eef8558A681Db34', //snowballLandFarmAddress
    '0x5C4dcBde67fa7cc2098f89e58148e41234A30af4', //sbtAddress
    '0x5C4dcBde67fa7cc2098f89e58148e41234A30af4', //wantAddress
    '0x0000000000000000000000000000000000000000', //token0Address
    '0x0000000000000000000000000000000000000000', //token1Address
    '0x0000000000000000000000000000000000000000', //earnedAddress
    '0x0000000000000000000000000000000000000000', //farmContractAddress
    '0x0000000000000000000000000000000000000000', //uniRouterAddress
    '0x0000000000000000000000000000000000000000', //rewardsAddress
    '0x000000000000000000000000000000000000dEaD', //buyBackAddress
  ],
  pid: 0,
  isCAKEStaking: false, // Strategy dependent
  isSameAssetDeposit: false,
  isAutoComp: false, // Strategy dependent
  earnedToSbtPath:[],
  earnedToToken0Path:[],
  earnedToToken1Path:[],
  token0ToEarnedPath:[],
  token1ToEarnedPath:[],
  controllerFee: 3000,
  buyBackRate: 100,
  entranceFeeFactor: 10000,
  withdrawFeeFactor: 10000,
  allocPoint: 0, // Refers farm allocation points
  isWithUpdate: false, // Refers to calling update on pools
  contractName: "StratSbt2_PCS",
};
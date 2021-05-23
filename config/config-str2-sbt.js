module.exports = {
  // Strategy2 (values depend on different cases, hence require changes on deploy)
  // pool sbt
  addresses: [
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', //wbnbAddress
    '0x939166BA561214c90cFdecff33AcCcE81b2e9542', //govAddress
    '0x4037b7d049b5CD3044Dad8957204cBa1627621bc', //snowballLandFarmAddress
    '0x23dE6D136ae765f256619c57201FF57C25ACB565', //sbtAddress
    '0x23dE6D136ae765f256619c57201FF57C25ACB565', //wantAddress
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
  controllerFee: 0,
  buyBackRate: 3000,
  entranceFeeFactor: 10000,
  withdrawFeeFactor: 10000,
  allocPoint: 0, // Refers farm allocation points
  isWithUpdate: false, // Refers to calling update on pools
  contractName: "StratSbt2_PCS",
};
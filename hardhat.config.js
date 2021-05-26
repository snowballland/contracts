require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const testnet = require("./.networks/testnet");
const mainnet = require("./.networks/mainnet");
const bscscan = require("./.networks/bscscan");
//require('hardhat-abi-exporter');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

function __init_networks__() {
  let networks = {};
  networks.mainnet = mainnet;
  networks.testnet = testnet;
  return networks;
}

function __init_etherscan__() {
  let etherscan = {};
  etherscan = bscscan;
  return etherscan;
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",
  networks: __init_networks__(),
  etherscan: __init_etherscan__(),
  abiExporter: {
    path: './abi',
    clear: true,
    flat: false,
    only: [],
    spacing: 2
  }
};


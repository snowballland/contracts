require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545/",
      chainId: 97,
      accounts: [''],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      accounts: [''],
    },
  },
  abiExporter: {
    path: './abi',
    clear: true,
    flat: false,
    only: [],
    spacing: 2
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ""
  },
};


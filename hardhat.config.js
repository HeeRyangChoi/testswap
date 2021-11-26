require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/Fo0oM3HXNct2wUUjhVYtTIucbDkULjSQ`,
      accounts: [`20efc840b89203eee9e208ba782842b434187ebfb624f2312286616d04742800`]
    }
  }
};

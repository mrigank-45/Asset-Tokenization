const path = require("path");
// require("dotenv").config({ path: "./.env" });
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const AccountIndex = 0;

module.exports = {

  contracts_build_directory: "../client/src/contracts",
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    // ganache_local: {
    //   provider: function () {
    //     return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545", AccountIndex)
    //   },
    //   network_id: 5777
    // },
    // goerli_infura: {
    //   provider: function () {
    //     return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/ffa60321cbbd4cfda3352014c556e3c3", AccountIndex)
    //   },
    //   network_id: 5
    // },
    // ropsten_infura: {
    //   provider: function () {
    //     return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/ffa60321cbbd4cfda3352014c556e3c3", AccountIndex)
    //   },
    //   network_id: 3
    // }
  },

  compilers: {
    solc: {
      version: "0.6.1",
    }
  },
};

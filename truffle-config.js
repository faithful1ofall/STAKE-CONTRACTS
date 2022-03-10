const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "build/contracts"),
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://testnet-rpc.coinex.net"),
          network_id: '53',            
        },
    live: {
          provider: () => new HDWalletProvider(mnemonic, "https://rpc.coinex.net"),
              network_id: '52',            
            },
    development: {
      network_id: "*",
      host: "127.0.0.1",
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.7.6"
    }
  }

};

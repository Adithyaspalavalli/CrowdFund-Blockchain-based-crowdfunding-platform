require("dotenv").config({ path: __dirname + "/.env.local" }); // When deploying -- be careful about this path..
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("@nomicfoundation/hardhat-toolbox");

console.log(process.env.SEPOLIA_RPC_URL);
console.log(process.env.PRIVATE_KEY);

module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000000,
    },
  },
  mocha: {
    timeout: 90000,
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      blockGasLimit: 18800000,
      chainId: 31337,
    },
    sepolia_testnet: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
     // blockConfirmations: 6,
     //  gasPrice: 100000000,
      gas: "auto",
      maxFeePerGas: 3000000000, // 3 gwei
      maxPriorityFeePerGas: 1000000000, // 1 gwei
      saveDeployments: true,
       deploy: ["scripts/"],
    }
    // goerli_testnet: {
    //   // url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`, <<-- tried this way, its failing, so employed below way.
    //   url: "https://goerli.infura.io/v3/eaf842956c36444c8aaf54163a47e0d2",
    //   accounts: [process.env.PRIVATE_KEY],
    //   gasPrice: 1000,
    //   saveDeployments: true,
    //   deploy: ["scripts/"],
    // },
  },
   etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    noColors: true,
    currency: "USD",
    // Optional: only used if you have a CoinMarketCap API key
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
};

/**
 * guide: https://docs.palm.io/HowTo/Deploy-using-Hardhat/ - as redirected by Infura (to deploy via HardHat)
 * $ npx hardhat compile
 * $ npx hardhat --network goerli_testnet deploy
Nothing to compile
Contract deployed to address: 0xB2B305a50121d6acC8c0F8951a6cdb41d3bB0C6D
deploying "CrowdHelp" (tx: 0xe7a0301eae21ef759c24c188d2554d538cbe5e11d3ea1b9c6c385862d38df927)...: deployed at 0x5a61c16165e797bb770887F339f9DCb6608dce02 with 2316759 gas
 
  new deploy..
  eaf842956c36444c8aaf54163a47e0d2
367d65fef68348fd92b6ba50e22b9bd63d45c7cf8c72072cedb6b8ae6ba7f8fc
Nothing to compile
Contract deployed to address: 0xB2B305a50121d6acC8c0F8951a6cdb41d3bB0C6D
reusing "CrowdHelp" at 0x5a61c16165e797bb770887F339f9DCb6608dce02
*/

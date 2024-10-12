import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
require("./task");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');

// config
const PRIVATE_KEY         = ""; // your deployer private key
const POLYGONSCAN_API_KEY = "";
const ETHERSCAN_API_KEY   = "";
const BSCSCAN_API_KEY     = "";
const BASESCAN_API_KEY    = "";
const RPC_URL_POLYGON     = "";
const RPC_URL_BSC         = "";
const RPC_URL_BSC_TESTNET = "";
const RPC_URL_HOLESKY     = "";
const RPC_URL_SEPOLIA     = "";
const RPC_URL_BASE        = "";


const config: HardhatUserConfig = {
  networks: {
    polygon: {
      chainId     : 137,
      url         : RPC_URL_POLYGON as string,
      accounts    : [PRIVATE_KEY as string],
    },
    bsc: {
      chainId     : 56,
      url         : RPC_URL_BSC as string,
      accounts    : [PRIVATE_KEY as string],
      gas         : 8000000,
      minGasPrice : 30000000000 
    },
    bscTestnet: {
      chainId     : 97,
      url         : RPC_URL_BSC_TESTNET,
      accounts    : [PRIVATE_KEY as string],
      // minGasPrice : 5000000000 // 5 gwei
    },
    holesky: {
      chainId     : 17000,
      url         : RPC_URL_HOLESKY,
      accounts    : [PRIVATE_KEY as string],
    },
    sepolia: {
      chainId     : 11155111,
      url         : RPC_URL_SEPOLIA,
      accounts    : [PRIVATE_KEY as string],
    },
    base: {
      chainId     : 8453,
      url         : RPC_URL_BASE,
      accounts    : [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai : POLYGONSCAN_API_KEY as string,
      bscTestnet    : BSCSCAN_API_KEY as string,
      bsc           : BSCSCAN_API_KEY as string,
      polygon       : POLYGONSCAN_API_KEY as string,
      holesky       : ETHERSCAN_API_KEY as string,
      sepolia       : ETHERSCAN_API_KEY as string,
      base          : BASESCAN_API_KEY as string,
    },
    customChains: [
      {
        network: "holesky",
        chainId: 17000,
        urls: {
          apiURL     : "https://api-holesky.etherscan.io/api",
          browserURL : "https://holesky.etherscan.io",
        }
      },
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL     : "https://api-sepolia.etherscan.io/api",
          browserURL : "https://sepolia.etherscan.io",
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL     : "https://api.basescan.org/api",
          browserURL : "https://basescan.org/",
        }
      },
    ]
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};

export default config;



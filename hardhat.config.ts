import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";


const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.TESTNET_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  }
};

export default config;

// Deploy Contract: npx hardhat run --network goerli scripts/deploy_box_v1.ts

// Verify Contract: npx hardhat verify --network goerli 0x3E6061F09EB124aC7F40A23C86090D67C493Bc9F
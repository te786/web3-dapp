import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/7962882a970d4bb8a9b5e74f06c7f642`,
      accounts: ["9f69774e1f8afa27117b33ce9711dabb77e7d8e82602473c09d193bd2ac859ee"]
    }
  }
};

export default config;

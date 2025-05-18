const hre = require("hardhat");

async function main() {
  console.log("Compiling and preparing for deployment...")
  // We get the contract to deploy
  const CrowdHelp = await hre.ethers.getContractFactory("CrowdHelp");
   console.log("Contract factory obtained. Deploying...");
  const crowdHelp = await CrowdHelp.deploy();
   console.log("CrowdHelp yet to deploy wait");

  await crowdHelp.deployed();

  console.log("CrowdHelp deployed to:", crowdHelp.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

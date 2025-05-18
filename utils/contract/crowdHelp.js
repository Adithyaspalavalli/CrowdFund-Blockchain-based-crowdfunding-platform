import web3 from "../web3";
import CrowdHelp from "../../artifacts/contracts/CrowdHelp.sol/CrowdHelp.json";

const crowdHelpContractAddress = "0x4cb5baDa59e53b1e04b02dEFA4cfed82C9886e43";
const crowdHelp = new web3.eth.Contract(
  CrowdHelp.abi,
  crowdHelpContractAddress
);

export default crowdHelp;

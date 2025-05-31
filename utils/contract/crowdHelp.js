import web3 from "../web3";
import CrowdHelp from "../../artifacts/contracts/CrowdHelp.sol/CrowdHelp.json";

const crowdHelpContractAddress = "0xFA9874722C52D38aE4E1f529bFE94Cc92839DE3D";
const crowdHelp = new web3.eth.Contract(
  CrowdHelp.abi,
  crowdHelpContractAddress
);

export default crowdHelp;

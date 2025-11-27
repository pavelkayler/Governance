import abi from "./abi.json";
import { ethers } from "ethers";
class GovernorServices {
  contractAddress = "0xdB7d6AB1f17c6b31909aE466702703dAEf9269Cf";
  provider;
  signer;
  contract;

  constructor() {
    this.provider = new ethers.BrowserProvider(window.ethereum);
  }

  async init() {
    this.signer = await this.provider.getSigner();
    this.contract = new ethers.Contract(this.contractAddress, abi, this.signer);
  }
  async viewProposals() {
    if (!this.contract) {
      await this.init();
    }
    try {
      const l = await this.contract.viewProposals();
      console.log(l);
      return l;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new GovernorServices();

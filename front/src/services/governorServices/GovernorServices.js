import abi from "./abi.json";
import { ethers } from "ethers";

class GovernorServices {
  contractAddress = "0x9F47649EAc9513B76957946bA9c1E929DDA330cC";
  rpcProvider;
  reader;
  provider;
  signer;
  writer;

  async connect() {
    this.rpcProvider = await new ethers.JsonRpcProvider("http://localhost:8545");
    this.reader = await new ethers.Contract(this.contractAddress, abi, this.rpcProvider);
  }

  async connectWallet() {
    this.provider = await new ethers.BrowserProvider(window.ethereum);
    this.signer = await this.provider.getSigner();
    this.writer = await new ethers.Contract(this.contractAddress, abi, this.signer);
    return await this.signer.getAddress();
  }

  async disconnect() {
    this.signer = null;
    this.writer = null;
  }

  async getAllProposalIds() {
    !this.reader && (await this.connect());

    try {
      return await this.reader.getAllProposalIds();
    } catch (error) {
      console.error(error);
    }
  }

  async state(proposalId) {
    !this.reader && (await this.connect());

    try {
      return await this.reader.state(proposalId);
    } catch (error) {
      console.error(error);
    }
  }

  // const [state, setState] = useState(new Map());
  async viewProposal(proposalId) {
    !this.reader && (await this.connect());

    try {
      // const resProposal =
      // setInterval(() => {
      //   // await this.reader.getState(proposalId).then((state) => {
      //     setState(state);
      //   })
      // }, 1000);
      return await this.reader.viewProposal(proposalId);
    } catch (error) {
      console.error(error);
    }
  }

  async viewMyBalances() {
    !this.writer && (await this.connectWallet());

    try {
      return await this.writer.viewMyBalances();
    } catch (error) {
      console.error(error);
    }
  }

  async create_A_of_B_propose(target, value, period) {
    // if (!this.writer) await this.connectWallet();
    // this.writer || (await this.connectWallet());
    !this.writer && (await this.connectWallet());

    try {
      return await this.writer.create_A_of_B_propose(target, value, period);
    } catch (error) {
      console.error(error);
    }
  }

  async create_C_or_D_propose(_user, simpleMost, adding, _period) {
    !this.writer && (await this.connectWallet());

    try {
      return await this.writer.create_C_or_D_propose(_user, simpleMost, adding, _period);
    } catch (error) {
      console.error(error);
    }
  }

  async create_E_or_F_propose(simpleMost, _system, _newDenominator, _period) {
    !this.writer && (await this.connectWallet());
    try {
      return await this.writer.create_E_or_F_propose(simpleMost, _system, _newDenominator, _period);
    } catch (error) {
      console.error(error);
    }
  }

  async myCastVote(proposalId, support, amount) {
    !this.writer && (await this.connectWallet());

    try {
      return await this.writer.myCastVote(proposalId, support, amount);
    } catch (error) {
      console.error(error);
    }
  }

  async cancel(proposalId) {
    !this.writer && (await this.connectWallet());

    try {
      return await this.writer.cancel(proposalId);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new GovernorServices();

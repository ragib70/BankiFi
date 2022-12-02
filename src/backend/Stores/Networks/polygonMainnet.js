// import { INetworkSpecifics, ExternalAddresses, AddNetworkParams, SwitchNetworkParams } from '.'
import DeployedAddressesPolygon from "../../Assets/deployed-polygon.json";
import DeployedABIsPolygon from "../../Assets/abis-polygon.json";
import TokenListPolygon from "../../Assets/token-list-polygon.json";
import web3 from "web3";

export default class PolygonNetworkSpecifics {
  getNetworkName() {
    return "polygonMainnet";
  }

  getHumanReadableNetworkName() {
    return "PolygonMainnet";
  }

  getChainID() {
    return 137;
  }

  getDeployedAddresses() {
    return DeployedAddressesPolygon;
  }

  getDeployedABIs() {
    return DeployedABIsPolygon;
  }

  getExternalAddresses() {
    return {
      imo: "",
      dai: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      usdc: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      weth: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    };
  }

  getTokenList() {
    return TokenListPolygon;
  }

  getSubgraphURL() {
    return "";
  }

  getEtherscanTxUrl(tx) {
    return `https://polygonscan.com/tx/${tx}`;
  }

  getAddNetworkParams() {
    let chain_id = 137;
    chain_id = web3.utils.toHex(chain_id);
    return {
      chainId: chain_id,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com"],
    };
  }

  getSwitchNetworkParams() {
    let chain_id = 137;
    chain_id = web3.utils.toHex(chain_id);
    return {
      chainId: chain_id,
    };
  }

  getRPCURL() {
    return "https://polygon-rpc.com/";
  }
}

import create from "zustand";
import Web3 from "web3";
import { NETWORK } from "./Networks";

export const useContractStore = create((set) => ({
  all41ExchangeContract: undefined,
  all41USDCContract: undefined,
}));

export function clearContracts() {
  useContractStore.setState({
    all41ExchangeContract: undefined,
    all41USDCContract: undefined,
  });
}

export function initContractsFromWeb3(web3) {
  const deployedAddresses = NETWORK.getDeployedAddresses();
  const abis = NETWORK.getDeployedABIs();

  const all41ExchangeContract = new web3.eth.Contract(
    abis.all41Exchange,
    deployedAddresses.all41Exchange,
    { from: web3.eth.defaultAccount }
  );

  const all41USDCContract = new web3.eth.Contract(
    abis.all41USDC,
    deployedAddresses.all41USDC,
    { from: web3.eth.defaultAccount }
  );

  useContractStore.setState({
    all41ExchangeContract: all41ExchangeContract,
    all41USDCContract: all41USDCContract,
  });
}

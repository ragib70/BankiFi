import Web3 from "web3";
const resolveENSName = async (ensName) => {
  const web3 = new Web3(
    "https://mainnet.infura.io/v3/055eacfc3a3e423d8b739434b6824f32"
  );
  const ens = web3.eth.ens;
  var address = await ens.getAddress(ensName);
  return address;
};

export { resolveENSName };

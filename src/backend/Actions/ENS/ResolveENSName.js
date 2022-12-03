//import { useWalletStore } from "../../stores/walletStore";

const resolveENSName = async (ensName) => {
    const web3 = useWalletStore.getState().web3;
    const ens = web3.eth.ens;
    var address = await ens.getAddress(ensName);
    return address;
}

export { resolveENSName };
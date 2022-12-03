import { useContractStore } from "../../Stores/contractStore";

// Write Contract Function.
function transferAmountTo(address, amount) {
  // Here the amount should be given in WEI which is 10^18 denomination.
  const all41USDC = useContractStore.getState().all41USDCContract;

  if (!all41USDC) {
    console.error(`all41USDC not set correctly`);
    return null;
  }

  try {
    return all41USDC.methods.transfer(address, amount).send();
  } catch (error) {
    console.error("all41USDC.methods.transfer failed");
    return null;
  }
}

export { transferAmountTo };

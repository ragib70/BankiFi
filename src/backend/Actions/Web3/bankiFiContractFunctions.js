import { useContractStore } from "../../Stores/contractStore";

// Read Contract functions.
async function getBorrowerByID(id) {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._borrowerList(id).call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Borrower By ID");
  }
}

async function getLenderByID(id) {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._lenderList(id).call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Lender By ID");
  }
}

async function getNumOfBorrowers() {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._borrowerNum().call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Number of Borrowers");
  }
}

async function getNumOfLenders() {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._lenderNum().call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Number of Lenders");
  }
}

async function getPoolFee() {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods.poolFee().call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Pool Fee");
  }
}

// Write Contract Functions

function depositAmountLender(tokenAddress, amount) {
  // Here the amount should be givrn in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  try {
    return all41Exchange.methods.lenderDeposit(tokenAddress, amount).send();
  } catch (error) {
    console.error("all41Exchange.methods.lenderDeposit failed");
    return null;
  }
}

function depositAmountBorrower(tokenAddress, amount) {
  // Here the amount should be givrn in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  const usdc = tokenAddress;
  const weth = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";
  const _timeMonths = 3;
  const installment = 1;

  try {
    return all41Exchange.methods
      .borrowerDeposit(
        tokenAddress,
        amount,
        usdc,
        weth,
        _timeMonths,
        installment
      )
      .send();
  } catch (error) {
    console.error("all41Exchange.methods.borrowerDeposit failed");
    return null;
  }
}

function matchBorrowerWithLender(id, uri, timeInMonths) {
  // Here the amount should be givrn in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  try {
    return all41Exchange.methods
      .matchBorrowerLender(
        id,
        "0xec88e58fc896477317d66a8286511ba3de5704d5",
        uri,
        timeInMonths
      )
      .send();
  } catch (error) {
    console.error("all41Exchange.methods.matchBorrowerLender failed");
    return null;
  }
}

function depositInstallmentToLender(tokenAddress, id) {
  // Here the amount should be givrn in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  try {
    return all41Exchange.methods.PayInstallment(tokenAddress, id).send();
  } catch (error) {
    console.error("all41Exchange.methods.payInstallment failed");
    return null;
  }
}

function checkPositionStatus(id) {
  // Here the amount should be given in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  const weth = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";
  try {
    return all41Exchange.methods.CorrectInstallment(id, weth).send();
  } catch (error) {
    console.error("all41Exchange.methods.CorrectInstallment failed");
    return null;
  }
}

export {
  getBorrowerByID,
  getLenderByID,
  getNumOfBorrowers,
  getNumOfLenders,
  getPoolFee,
  depositAmountLender,
  depositAmountBorrower,
  matchBorrowerWithLender,
  depositInstallmentToLender,
  checkPositionStatus,
};

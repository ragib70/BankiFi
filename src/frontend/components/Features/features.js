import "../../../styles.css";
import { useState } from "react";
import Modal1 from "../Modal1/modal1";
import Modal2 from "../Modal2/modal2";
import Modal3 from "../Modal3/modal3";
import Button from "react-bootstrap/Button";
import {
  depositAmountBorrower,
  depositAmountLender,
  depositInstallmentToLender,
  checkPositionStatus,
  getBorrowerByID,
  getNumOfBorrowers,
  getLenderByID,
} from "../../../backend/Actions/Web3/bankiFiContractFunctions.js";
import { getNFTMetadataURIFromInfuraIPFS } from "../../../backend/Actions/InfuraIPFS/GetNFTMetadataURIFromInfuraIPFS";
import {
  getNFTDataUsingCovalent,
  getTokenIDsUsingCovalent,
} from "../../../backend/Actions/Covalent/GetNFTDataUsingCovalent";
import { mintNFTUsingNFTPort } from "../../../backend/Actions/NFTPort/MintNFTUsingNFTPort";
import { sendNotification } from "../../../backend/Actions/Push/PushNotificationUtil";
import { transferAmountTo } from "../../../backend/Actions/Web3/usdcContractFunctions";
import { resolveENSName } from "../../../backend/Actions/ENS/ResolveENSName";
import { transferNFTUsingNFTPort } from "../../../backend/Actions/NFTPort/TransferNFTUsingNFTPort";

function Features() {
  const [modal1Show, setModal1Show] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const [modal3Show, setModal3Show] = useState(false);
  const [modal4Show, setModal4Show] = useState(false);
  const [modal5Show, setModal5Show] = useState(false);

  return (
    <section id="features">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-circle-check"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal1Show(true)}
              className="bgColorWhite"
            >
              <h3>Borrower</h3>
            </Button>
          </h3>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-bullseye"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal2Show(true)}
              className="bgColorWhite"
            >
              <h3>Lender</h3>
            </Button>
          </h3>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-circle-check"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal3Show(true)}
              className="bgColorWhite"
            >
              <h3>Sell NFT</h3>
            </Button>
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-circle-check"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal4Show(true)}
              className="bgColorWhite"
            >
              <h3>Pay Lender</h3>
            </Button>
          </h3>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-bullseye"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal5Show(true)}
              className="bgColorWhite"
            >
              <h3>Position Check</h3>
            </Button>
          </h3>
        </div>
      </div>

      <Modal1
        show={modal1Show}
        onHide={() => setModal1Show(false)}
        modalheader="Borrower Deposit"
        title="Amount"
        placeholder="Token Amount"
        function={async (tokenAddress, tokenAmount) => {
          // Borrower Deposit amount and matching happens in this function.
          await depositAmountBorrower(tokenAddress, tokenAmount);

          // Minting NFT
          // Get the metadata for the NFT and forming the json file. Deriving the data from borrower id
          // Get Borrower Id.
          let borrowerId = await getNumOfBorrowers();
          borrowerId -= 1;

          // Get the borrower metadata.
          const borrowerData = await getBorrowerByID(borrowerId);

          // Get the lender Address
          const lenderData = await getLenderByID(borrowerData[2] - 1);

          // Forming the json file.
          const metadata = {
            image:
              "https://ipfs.io/ipfs/bafkreigsbxchov573focimtc5uddij4g2o443kh4nxlgpwgudvjig6zsty",
            name: "Borrower+Lender_" + borrowerId,
            description: "Leverage2x",
            properties: {
              "Borrower Deposit": borrowerData[1],
              origins: {
                borrowerAddress: borrowerData[0],
                lenderAddress: lenderData[0],
                lenderId: borrowerData[2],
                borrowerId: borrowerData[3],
                mainContractAddress:
                  "0xb8cC338C164849C39A6096AB0e318404Af8263cF",
              },
            },
          };

          // Push the metadata on IPFS and get back the uri.
          const uri = await getNFTMetadataURIFromInfuraIPFS(
            JSON.stringify(metadata)
          );

          // Get NFT token data.
          const tokenData = await getNFTDataUsingCovalent();
          const tokenId1 = Math.trunc(
            Object.keys(tokenData).length +
              Math.random() * (1000000 - 10000) +
              10000
          );
          const tokenId2 = tokenId1 + 1;
          // Mint NFT.
          const res = await mintNFTUsingNFTPort(
            borrowerData[0],
            lenderData[0],
            tokenId1.toString(),
            tokenId2.toString(),
            uri
          );

          // Push Integration.
          await sendNotification(
            borrowerData[0],
            "Order booked",
            `You order has been booked on BankiFi`,
            `BankiFi order booked`,
            `Hi, your order placed on BankiFi has been booked and an NFT has been minted to your wallet address.`
          );
          await sendNotification(
            lenderData[0],
            "Order booked",
            `You order has been booked on BankiFi`,
            `BankiFi order booked`,
            `Hi, your order placed on BankiFi has been booked and an NFT has been minted to your wallet address.`
          );
        }}
      />
      <Modal1
        show={modal2Show}
        onHide={() => setModal2Show(false)}
        modalheader="Lender Deposit"
        title="Amount"
        placeholder="Token Amount"
        function={async (tokenAddress, tokenAmount) => {
          await depositAmountLender(tokenAddress, tokenAmount);
        }}
      />
      <Modal2
        show={modal3Show}
        onHide={() => setModal3Show(false)}
        function={async (ensName, borrowerId) => {
          //await matchBorrowerWithLender(id, uri);
          console.log(ensName, borrowerId);
          // await transferAmountTo(ensName, borrowerId);
          // Get the borrower metadata.
          const borrowerData = await getBorrowerByID(borrowerId);
          const borrowerAddr = borrowerData[0];
          console.log(borrowerAddr);

          // Get NFT token data.
          const tokenId = await getTokenIDsUsingCovalent(borrowerAddr);

          // Get address from ENS name
          let transferToAddr = ensName;
          if (ensName.slice(0, 2) !== "0x") {
            transferToAddr = await resolveENSName(ensName);
          }

          console.log(transferToAddr);
          const res = await transferNFTUsingNFTPort(
            transferToAddr,
            tokenId.toString()
          );
          console.log(res);
        }}
      />
      <Modal1
        show={modal4Show}
        onHide={() => setModal4Show(false)}
        modalheader="Pay Installment to Lender"
        title="Id"
        placeholder="Borrower Id"
        function={async (tokenAddress, tokenAmount) => {
          await depositInstallmentToLender(tokenAddress, tokenAmount);

          let borrowerId = await getNumOfBorrowers();
          borrowerId -= 1;

          // Get the borrower metadata.
          const borrowerData = await getBorrowerByID(borrowerId);

          // Get the lender Address
          const lenderData = await getLenderByID(borrowerData[2] - 1);

          await sendNotification(
            lenderData[0],
            "Installment Received",
            `You installment has been received on BankiFi`,
            `BankiFi installment received`,
            `Hi, your monthly installemnt on BankiFi has been received and the amount has been credited to your wallet.`
          );
        }}
      />
      <Modal3
        show={modal5Show}
        onHide={() => setModal5Show(false)}
        modalheader="Correct Installment or Close Position"
        title="Id"
        placeholder="Lender Id + Only Lender can Call"
        function={async (id) => {
          await checkPositionStatus(id);
        }}
      />
    </section>
  );
}

export default Features;

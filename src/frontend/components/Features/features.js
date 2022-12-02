import "../../styles.css";
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
  matchBorrowerWithLender,
} from "../../actions/web3/bankiFiContractFunctions.js";

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
              <h3>Match</h3>
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
          await depositAmountBorrower(tokenAddress, tokenAmount);
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
        function={async (id, uri, time) => {
          await matchBorrowerWithLender(id, uri, time);
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

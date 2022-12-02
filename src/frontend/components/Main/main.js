import "../../../styles.css";
import { useState } from "react";
import { injected } from "../../../backend/Wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import { setWeb3, useWalletStore } from "../../../backend/Stores/walletStore";
import { initContractsFromWeb3 } from "../../../backend/Stores/contractStore";

function Main() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      const web3 = useWalletStore.getState().web3;
      setWeb3(web3, undefined);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <section id="title">
      <div className="container-fluid">
        {/* <!-- Nav Bar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="">
            LP Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Get Started
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    connect();
                  }}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    disconnect();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Title --> */}
        <div className="row">
          <div className="col-lg-6">
            <h1 className="heading1">New way to interact with Liquidity</h1>
            <button
              className="btn btn-dark btn-lg download-button"
              type="button"
            >
              {active ? `Wallet Connected : ${account}` : "Wallet Disconnected"}
            </button>
          </div>
          <div className="col-lg-6">
            <img
              className="image-dog"
              src="/images/TitleImage.jpg"
              alt="trading-mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;

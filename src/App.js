import "./App.css";
import { useEffect } from "react";
import Features from "./components/Features/features";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import Web3 from "web3";
import WrongNetworkOverlay from "./components/WrongNetwork/wrongNetworkOverlay";
import { NETWORK } from "./stores/networks";
import { initContractsFromWeb3 } from "./stores/contractStore";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { setWeb3 } from "./stores/walletStore";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  const { active } = useWeb3React();

  useEffect(() => {
    // If no wallet is connected, then use Infura ETH node provider (not free). When wallet is connected, wallet lets you use contracts for FREE
    if (!active) {
      const web3 = new Web3(Web3.givenProvider);
      initContractsFromWeb3(web3);
      setWeb3(web3, undefined);
    }
  }, [active]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <WrongNetworkOverlay />
        <Main />
        <Features />
        <Footer />
      </div>
    </Web3ReactProvider>
  );
}

export default App;

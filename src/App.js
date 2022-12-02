import "./App.css";
import { useEffect } from "react";
import Features from "./frontend/components/Features/features";
import Footer from "./frontend/components/Footer/footer";
import Main from "./frontend/components/Main/main";
import Web3 from "web3";
import WrongNetworkOverlay from "./frontend/components/WrongNetwork/wrongNetworkOverlay";
import { NETWORK } from "./backend/Stores/Networks";
import { initContractsFromWeb3 } from "./backend/Stores/contractStore";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { setWeb3 } from "./backend/Stores/walletStore";

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

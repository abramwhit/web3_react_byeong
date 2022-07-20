import "./App.css";
import { injected } from "./connector/connectors";
import { useWeb3React } from "@web3-react/core";

function App() {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const handleConnect = () => {
    if (active) {
      deactivate();
      return;
    }
    activate(injected, (error) => {
      if ("/No Ethereum provider was found on window.ethereum/".test(error)) {
        window.open("https://metamask.io/download.html");
      }
    });
  };

  return (
    <div>
      <div>
        <p>Account: {account}</p>
        <p>ChainId: {chainId}</p>
      </div>
      <div>
        <button type="button" onClick={handleConnect}>
          {active ? "disconnect" : "connect"}
        </button>
      </div>
    </div>
  );
}

export default App;

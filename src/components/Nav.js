import React from "react";
import { injected } from "../connector/connectors";
import { useWeb3React } from "@web3-react/core";
import walletAccountAtom from "../atoms/walletAccount";
import { useRecoilValue, useRecoilState } from "recoil";

function Nav() {
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
    <>
      <div className="navbar">
        <div className="navImage1">image1</div>
        <div className="navImage2">image2</div>
        <div className="navImage3">image3</div>
        <a href="#" onClick={handleConnect}>
          Connect Wallet
        </a>
      </div>
    </>
  );
}

export default Nav;

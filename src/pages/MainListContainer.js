import React from "react";
import { injected } from "../connector/connectors";
import { useWeb3React } from "@web3-react/core";
import walletAccountAtom from "../atoms/walletAccount";
import { useRecoilValue, useRecoilState } from "recoil";

function MainListContainer() {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const walletAccount = useRecoilValue(walletAccountAtom);
  // const [state, setState] = useRecoilState(walletAccountAtom);

  console.log("walletAccount: ", walletAccount);

  return (
    <>
      <div className="mainListContainer">
        <div>
          <p>Account: {account}</p>
          <p>ChainId: {chainId}</p>
          <p>useRecoilValue: {walletAccount}</p>
          {/* <p>useRecoilState: {state}</p> */}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MainListContainer;

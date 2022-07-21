import "./App.css";
import { injected } from "./connector/connectors";
import { useWeb3React } from "@web3-react/core";
import walletAccountAtom from "./atoms/walletAccount";
import { useRecoilValue, useRecoilState } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainListContainer from "./pages/MainListContainer";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact={true} path="/">
          <MainListContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

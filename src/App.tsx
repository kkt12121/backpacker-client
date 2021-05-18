import { getStoreData } from "action/Action";
import FindUserInfoPage from "page/FindUserInfoPage";
import LoginPage from "page/LoginPage";
import MainPage from "page/MainPage";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router";

function App() {
  let dispatch = useDispatch();
  const testReducer = useSelector((state) => state);
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(getStoreData())}>
        아ㅏㅏ아아ㅏㅏ아ㅏ아아
      </button> */}

      <Switch>
        <Route exact path="/">
          <MainPage />
          <LoginPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/finduser">
          <FindUserInfoPage />
        </Route>
      </Switch>

      {console.log(testReducer)}
    </div>
  );
}

export default App;

import FindUserInfoPage from "page/FindUserInfoPage";
import LoginPage from "page/LoginPage";
import Navbar from "component/Navbar";
import MainPage from "page/MainPage";
import SignUpPage from "page/SignUpPage";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import ContentListPage from "page/ContentListPage";
function App() {
  let dispatch = useDispatch();
  const testReducer = useSelector((state) => state);
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(getStoreData())}>
        아ㅏㅏ아아ㅏㅏ아ㅏ아아
      </button> */}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
          <LoginPage />
          <SignUpPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/finduser">
          <FindUserInfoPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/listpage">
          <ContentListPage />
        </Route>
      </Switch>
      {console.log(testReducer)}
    </div>
  );
}

export default App;

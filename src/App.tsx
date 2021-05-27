import FindUserInfoPage from "page/FindUserInfoPage";
import LoginPage from "page/LoginPage";
import Navbar from "component/Navbar";
import MainPage from "page/MainPage";
import SignUpPage from "page/SignUpPage";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import ContentWritePage from "page/ContentWritePage";
import ContentListPage from "page/ContentListPage";
import EnterContentPage from "page/EnterContentPage";
import ContentInvite from "component/ContentInvite";
import MyPage from "page/Mypage";
import InvitePage from "page/InvitePage";
import InviteLogin from "component/InviteLogin";

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
        </Route>
        <Route path="/finduser">
          <FindUserInfoPage />
        </Route>
        <Route path="/contentwrite">
          <ContentWritePage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/content">
          <EnterContentPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/listpage">
          <ContentListPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/mypage">
          <MyPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/invite">
          <InvitePage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">
          <InviteLogin />
        </Route>
      </Switch>
      {console.log(testReducer)}
    </div>
  );
}

export default App;

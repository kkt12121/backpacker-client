import FindUserInfoPage from "page/FindUserInfoPage";
import Navbar from "component/Navbar";
import MainPage from "page/MainPage";
import SignUpPage from "page/SignUpPage";
import { Route, Switch } from "react-router";
import ContentWritePage from "page/ContentWritePage";
import ContentListPage from "page/ContentListPage";
import EnterContentPage from "page/EnterContentPage";
import MyPage from "page/Mypage";
import InvitePage from "page/InvitePage";
import InviteLogin from "component/InviteLogin";
// 최종
function App() {
  return (
    <div className="App">
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
        <Route path="/content/:id">
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
        <Route path="/invite/:id">
          <InvitePage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">
          <InviteLogin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import axios from "axios";
import logout from "component/Logout";
import ModifyUserInfo from "component/ModifyUserInfo";
import MyContent from "component/MyContent";
import UserInfo from "component/UserInfo";
import { useState } from "react";
import "../css/Mypage.scss";

function MyPage() {
  const [toggle, setToggle] = useState<boolean>(true);

  const toggleClickHandler = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="mypage">
      {toggle ? <UserInfo /> : <ModifyUserInfo />}
      <div className="btnBox">
        <button onClick={toggleClickHandler}>
          {toggle ? "정보수정" : "유저정보"}
        </button>
        <button onClick={logout}>로그아웃</button>
      </div>
      <MyContent />
    </div>
  );
}

export default MyPage;

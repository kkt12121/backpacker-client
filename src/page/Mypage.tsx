import axios from "axios";
import logout from "component/Logout";
import ModifyUserInfo from "component/ModifyUserInfo";
import UserInfo from "component/UserInfo";
import { useState } from "react";

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
    <div>
      {toggle ? <UserInfo /> : <ModifyUserInfo />}
      <button onClick={toggleClickHandler}>정보수정/유저정보</button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default MyPage;

import axios from "axios";
import { useEffect, useState } from "react";
import "../css/UserInfo.scss";
function UserInfo() {
  let token = localStorage.getItem("token");
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://localhost:4000/mypage/userInfo", {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          setUserData(res.data.userFind);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className="userInfoSection">
        userinfo
        <div className="userInfoEmail">이메일 :{userData?.email}</div>
        <div className="userInfoName">이름 : {userData?.name}</div>
        <div className="userInfoNickName">닉네임 :{userData?.nickname}</div>
        <div className="userInfoPhone">폰 : {userData?.phone}</div>
      </div>
    </>
  );
}

export default UserInfo;

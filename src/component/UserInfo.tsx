import axios from "axios";
import { useEffect, useState } from "react";
import "../css/UserInfo.scss";
import "dotenv/config";

function UserInfo() {
  let token = localStorage.getItem("token");
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/mypage/userInfo`, {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log(res);
          setUserData(res.data.userFind);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className="userInfoSection">
        <div className="userInfoCard">
          <div className="userInfoName">
            <span>이름</span>
            <div>{userData?.name}</div>
          </div>
          <div className="userInfoNickName">
            <span>닉네임</span>
            <div>{userData?.nickname}</div>
          </div>
          <div className="userInfoEmail">
            <span>이메일</span>
            <div>{userData?.email}</div>
          </div>
          <div className="userInfoPhone">
            <span>휴대폰 번호</span>
            <div>{userData?.phone}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;

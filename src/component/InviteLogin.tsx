import { getLoginToken } from "action/LoginAction";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/InviteLogin.scss";
import { Text } from "@chakra-ui/react";
import "dotenv/config";

function InviteLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newEmail: string = email;
    newEmail = e.target.value;
    setEmail(newEmail);
    // console.log(newEmail);
  };
  const inputPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPw: string = password;
    newPw = e.target.value;
    setPassword(newPw);
    // console.log(newPw);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="bodyInviteLogin">
        <div className="loginInviteForm">
          <div className="formInviteLogin">
            <h1 className="formTitle">
              <Text fontWeight="bold" fontSize="2xl" fontStyle="italic">
                로그인
              </Text>
            </h1>
            <div className="formLoginDiv">
              <input
                className="formLoginInput"
                placeholder=" "
                onChange={inputEmailHandler}
              ></input>
              <label htmlFor="" className="formLabelLogin">
                Email
              </label>
            </div>
            <div className="formLoginDiv">
              <input
                className="formLoginInput"
                placeholder=" "
                type="password"
                onChange={inputPwHandler}
              ></input>
              <label htmlFor="" className="formLabelLogin">
                Password
              </label>
            </div>
            <a className="goToFind" href={`${process.env.REACT_APP_CLIENT_URL}/finduser`}>
              이메일 / 패스워드 찾기
            </a>

            <div>
              <button
                className="loginBtn"
                onClick={() => {
                  dispatch(getLoginToken(email, password));
                }}
              >
                로그인
              </button>
              <div id="gSignInWrapper">
                <div
                  id="customBtn"
                  className="customGPlusSignIn"
                  onClick={async () => {
                    window.location.assign(
                      `https://accounts.google.com/o/oauth2/auth?client_id=790150276040-a80efgd4j9o2qu2ftd49e0esosrpsrho.apps.googleusercontent.com&redirect_uri=${process.env.REACT_APP_CLIENT_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`
                    );
                  }}
                >
                  <span className="icon"></span>
                  <span className="buttonTextInvite">Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InviteLogin;

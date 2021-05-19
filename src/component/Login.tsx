import { getLoginToken } from "action/LoginAction";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newEmail: string = email;
    newEmail = e.target.value;
    setEmail(newEmail);
    console.log(newEmail);
  };
  const inputPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPw: string = password;
    newPw = e.target.value;
    setPassword(newPw);
    console.log(newPw);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="loginBox">
        <div className="inputSection">
          <input
            className="emailInput"
            placeholder="이메일"
            onChange={inputEmailHandler}
          ></input>
          <input
            className="passwordInput"
            placeholder="패스워드"
            type="password"
            onChange={inputPwHandler}
          ></input>
          <a className="goToFind" href="http://localhost:3000/finduser">
            이메일 / 패스워드 찾기
          </a>
        </div>
        <div>
          <button
            className="loginBtn"
            onClick={() => dispatch(getLoginToken(email, password))}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;

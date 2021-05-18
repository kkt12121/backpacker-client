import { getLoginToken } from "action/LoginAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
      <div>
        <span>이메일</span>
        <input className="emailInput" onChange={inputEmailHandler}></input>
        <span>패스워드</span>
        <input
          className="passwordInput"
          type="password"
          onChange={inputPwHandler}
        ></input>
      </div>
      <a>이메일 / 패스워드 찾기</a>
      <div>
        <button onClick={() => dispatch(getLoginToken(email, password))}>
          로그인
        </button>
      </div>
    </>
  );
}

export default Login;

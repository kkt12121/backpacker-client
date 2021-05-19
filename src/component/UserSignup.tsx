import React, { useState } from "react";
import { getSignup } from "action/SignupAction";
import { useDispatch } from "react-redux";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

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
  const inputPwCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPwCheck: string = passwordCheck;
    newPwCheck = e.target.value;
    setPasswordCheck(newPwCheck);
    console.log(newPwCheck);
  };
  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newName: string = name;
    newName = e.target.value;
    setName(newName);
    console.log(newName);
  };
  const inputNicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNickname: string = nickname;
    newNickname = e.target.value;
    setNickname(newNickname);
    console.log(newNickname);
  };
  const inputPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhone: string = phone;
    newPhone = e.target.value;
    setPhone(newPhone);
    console.log(newPhone);
  };
  const dispatch = useDispatch();

  return (
    <>
      <h1>회원가입</h1>
      <div>
        <div>
          <span>이메일</span>
          <input
            className=""
            name="name"
            type="text"
            onChange={inputEmailHandler}
          />
        </div>
        <div>
          <span>비밀번호</span>
          <input name="description" type="password" onChange={inputPwHandler} />
        </div>
        <div>
          <span>비밀번호 확인</span>
          <input
            name="description"
            type="password"
            onChange={inputPwCheckHandler}
          />
        </div>
        <div>
          <span>이름</span>
          <input name="description" type="text" onChange={inputNameHandler} />
        </div>
        <div>
          <span>닉네임</span>
          <input
            name="description"
            type="text"
            onChange={inputNicknameHandler}
          />
        </div>
        <div>
          <span>전화번호</span>
          <input name="description" type="text" onChange={inputPhoneHandler} />
        </div>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(getSignup(email, password, name, nickname, phone))
          }
        >
          등록
        </button>
      </div>
    </>
  );
}
export default UserSignup;

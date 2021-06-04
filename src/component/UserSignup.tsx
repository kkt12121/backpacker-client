import React, { useState } from "react";
import { getSignup } from "action/SignupAction";
import { useDispatch } from "react-redux";
import { FcCheckmark } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import "../css/SignUp.scss";
function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [emailSwitch, setemailSwitch] = useState(true);
  const [pwdSwitch, setpwdSwitch] = useState(true);
  const [pwdCheckSwitch, setpwdCheckSwitch] = useState(true);
  const [nameSwitch, setnameSwitch] = useState(true);
  const [nicknameSwitch, setnicknameSwitch] = useState(true);
  const [phoneSwitch, setphoneSwitch] = useState(true);
  const dispatch = useDispatch();

  const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newEmail: string = email;
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    newEmail = e.target.value;
    if (!regExp.test(newEmail)) {
      // console.log("이메일을 형식에 맞춰 올바르게 입력해주세요");
      setemailSwitch(false);
    } else {
      setemailSwitch(true);
      setEmail(newEmail);
    }
    // console.log(newEmail);
  };
  const inputPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPw: string = password;
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
    newPw = e.target.value;
    if (!regExp.test(newPw)) {
      // console.log("비밀번호를 올바르게 입력해주세요");
      setpwdSwitch(false);
    } else {
      setpwdSwitch(true);
      setPassword(newPw);
    }
    // console.log(newPw);
  };
  const inputPwCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPwCheck: string = passwordCheck;
    newPwCheck = e.target.value;
    if (password.localeCompare(newPwCheck) != 0) {
      //TypeScript는 equals로 문자열 비교를 할 수 없다. .localeCompare() 사용해서 문제 해결.
      // console.log("비밀번호가 일치하지 않습니다.");
      setpwdCheckSwitch(false);
    } else {
      setpwdCheckSwitch(true);
      setPasswordCheck(newPwCheck);
    }
    // console.log(newPwCheck);
  };
  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newName: string = name;
    var regExp = /^[가-힣]{2,4}$/;
    newName = e.target.value;
    if (!regExp.test(newName)) {
      // console.log("이름을 한글 2~4자로 사용해주세요");
      setnameSwitch(false);
    } else {
      setnameSwitch(true);
      setName(newName);
    }
    // console.log(newName);
  };
  const inputNicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNickname: string = nickname;
    var regExp = /^[가-힣]{2,6}$/;
    newNickname = e.target.value;
    if (!regExp.test(newNickname)) {
      // console.log("닉네임을 한글 2~6자로 사용해주세요");
      setnicknameSwitch(false);
    } else {
      setnicknameSwitch(true);
      setNickname(newNickname);
    }
    // console.log(newNickname);
  };
  const inputPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhone: string = phone;
    var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    newPhone = e.target.value;
    if (!regExp.test(newPhone)) {
      // console.log("전화번호 형식에 맞지 않습니다.");
      setphoneSwitch(false);
    } else {
      setphoneSwitch(true);
      setPhone(newPhone);
    }
    // console.log(newPhone);
  };
  return (
    <div className="body">
      <div className="signUpForm">
        <div className="form">
          <h1 className="formTitle">회원가입</h1>
          <div className="formDiv">
            <input
              className="formInput"
              name="name"
              type="text"
              placeholder=" "
              onChange={inputEmailHandler}
              autoFocus
            />
            <label htmlFor="" className="formLabel">
              Email
            </label>
          </div>
          {emailSwitch ? null : (
            <div className="errMessage">
              <FcHighPriority />
              이메일을 올바르게 입력해주세요.
            </div>
          )}
          {emailSwitch && email ? (
            <div className="message">
              <FcCheckmark size="15" />
              알맞은 형식입니다.
            </div>
          ) : null}
          <div className="formDiv">
            <input
              className="formInput"
              name="description"
              type="password"
              placeholder=" "
              onChange={inputPwHandler}
            />
            <label htmlFor="" className="formLabel">
              Password
            </label>
          </div>
          {pwdSwitch ? null : (
            <div className="errMessage">
              <FcHighPriority />
              영문,숫자를 조합하여 8자리 이상 만들어주세요.
            </div>
          )}
          {pwdSwitch && password ? (
            <div className="message">
              <FcCheckmark size="15" />
              알맞은 형식입니다.
            </div>
          ) : null}
          <div className="formDiv">
            <input
              className="formInput"
              name="description"
              type="password"
              placeholder=" "
              onChange={inputPwCheckHandler}
            />
            <label htmlFor="" className="formLabel">
              Password Check
            </label>
          </div>
          {pwdCheckSwitch ? null : (
            <div className="errMessage">
              <FcHighPriority />
              비밀번호가 일치하지 않습니다.
            </div>
          )}
          {pwdCheckSwitch && passwordCheck ? (
            <div className="message">
              <FcCheckmark size="15" />
              알맞은 형식입니다.
            </div>
          ) : null}
          <div className="formDiv">
            <input
              className="formInput"
              name="description"
              type="text"
              placeholder=" "
              onChange={inputNameHandler}
            />
            <label htmlFor="" className="formLabel">
              Name
            </label>
          </div>
          {nameSwitch ? null : (
            <div className="errMessage">
              <FcHighPriority />
              이름을 한글 2~4자로 사용해주세요
            </div>
          )}
          {nameSwitch && name ? (
            <div className="message">
              <FcCheckmark size="15" />
              알맞은 형식입니다.
            </div>
          ) : null}
          <div className="formDiv">
            <input
              className="formInput"
              name="description"
              type="text"
              placeholder=" "
              onChange={inputNicknameHandler}
            />
            <label htmlFor="" className="formLabel">
              Nickname
            </label>
          </div>
          {nicknameSwitch ? null : (
            <div className="errMessage">
              <FcHighPriority />
              닉네임을 한글 2~6자로 사용해주세요
            </div>
          )}
          {nicknameSwitch && nickname ? (
            <div className="message">
              <FcCheckmark size="15" />
              알맞은 형식입니다.
            </div>
          ) : null}
          <div className="formDiv">
            <input
              className="formInput"
              name="description"
              type="text"
              placeholder=" "
              onChange={inputPhoneHandler}
            />
            <label className="formLabel">
              Phone('-'없이 숫자만 입력해주세요)
            </label>
          </div>
          {phoneSwitch ? null : (
            <div className="errMessage">
              <FcHighPriority />
              전화번호 형식이 올바르게 입력되지 않았습니다.
            </div>
          )}
          {phoneSwitch && phone ? (
            <div className="message">
              <FcCheckmark className="message" size="15" />
              알맞은 형식입니다.
            </div>
          ) : null}
          <button
            className="signUpBtn"
            onClick={() =>
              dispatch(getSignup(email, password, name, nickname, phone))
            }
          >
            등록
          </button>
        </div>{" "}
        {/* //form */}
      </div>{" "}
      {/* //signUpForm */}
    </div>
  );
}
export default UserSignup;

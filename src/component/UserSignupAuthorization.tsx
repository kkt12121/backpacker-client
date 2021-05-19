import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

function UserSignupAuthorization() {
  const [newUser, setnewUser] = useState({});
  const [emailSwitch, setemailSwitch] = useState(true);
  const [pwdSwitch, setpwdSwitch] = useState(true);
  const [pwdCheckSwitch, setpwdCheckSwitch] = useState(true);
  const [nameSwitch, setnameSwitch] = useState(true);
  const [nicknameSwitch, setnicknameSwitch] = useState(true);
  const [daySwitch, setdaySwitch] = useState(true);
  const [yearSwitch, setyearSwitch] = useState(true);
  const history = useHistory();

  const emailCheck = (value: string) => {
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regExp.test(value)) {
      console.log("이메일 불일치");
      setemailSwitch(false);
    } else {
      console.log("이메일 일치");
      setemailSwitch(true);
      return regExp.test(value);
    }
  };

  const pwdCheck = (value: string) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

    if (!regExp.test(value)) {
      console.log("패스워드 불일치");
      setpwdSwitch(false);
    } else {
      console.log("패스워드 일치");
      setpwdSwitch(true);
      return regExp.test(value);
    }
  };

  const pwdcCheck = (value: string) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

    if (!regExp.test(value)) {
      console.log("패스워드 불일치");
      setpwdCheckSwitch(false);
    } else {
      console.log("패스워드 일치");
      setpwdCheckSwitch(true);
      return regExp.test(value);
    }
  };

  const nameCheck = (value: string) => {
    var regExp = /^[가-힣]{2,4}$/;

    if (!regExp.test(value)) {
      console.log("이름 불일치");
      setnameSwitch(false);
    } else {
      console.log("이름 일치");
      setnameSwitch(true);
      return regExp.test(value);
    }
  };

  const nicknameCheck = (value: string) => {
    var regExp = /^[가-힣]{2,6}$/;

    if (!regExp.test(value)) {
      console.log("닉네임 불일치");
      setnicknameSwitch(false);
    } else {
      console.log("닉네임 일치");
      setnicknameSwitch(true);
      return regExp.test(value);
    }
  };

  const yearCheck = (value: string) => {
    var regExp = /^[0-9]{4}$/;

    if (!regExp.test(value)) {
      setyearSwitch(false);
      console.log("년도 불일치");
    } else {
      console.log("년도 일치");
      setyearSwitch(true);
      return regExp.test(value);
    }
  };

  const dayCheck = (value: string) => {
    var regExp = /^([1-9]|1[1-9]|2[0-9]|3[01])$/;

    if (!regExp.test(value)) {
      console.log("일자 불일치");
      setdaySwitch(false);
    } else {
      console.log("일자 일치");
      setdaySwitch(true);
      return regExp.test(value);
    }
  };
  return <div></div>;
}

export default UserSignupAuthorization;

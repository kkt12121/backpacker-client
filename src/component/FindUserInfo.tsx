import { emailFinder, pwFinder } from "action/FindUserInfoAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/FindUserInfo.scss";

function FindUserInfo() {
  const emailState = useSelector((state: RootState) => state.findEmailReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const getNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newName: string = name;
    newName = e.target.value;
    setName(newName);
  };
  const getPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhone: string = phone;
    newPhone = e.target.value;
    setPhone(newPhone);
  };
  const getEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newEmail: string = email;
    newEmail = e.target.value;
    setEmail(newEmail);
  };
  return (
    <>
      <div className="findUserInfoBox">
        <p className="findBoxText"> 이메일 찾기 </p>
        <div className="findEmailBox">
          {emailState.email ? (
            <div className="yourEmail">
              {name}님의 이메일 주소는 {emailState.email} 입니다
            </div>
          ) : (
            <>
              <input
                className="inputTag"
                placeholder="이름을 입력하세요"
                onChange={getNameHandler}
              ></input>
              <input
                className="inputTag"
                placeholder="'-' 제외, 전화번호를 입력하세요"
                onChange={getPhoneHandler}
              ></input>
              <button
                className="findUserInfoBtn"
                onClick={() => dispatch(emailFinder(name, phone))}
              >
                이메일 찾기
              </button>
            </>
          )}
        </div>
        <p className="findBoxText"> 패스워드 찾기 </p>
        <div className="findPwBox">
          <input
            className="inputTag"
            placeholder="이메일을 입력하세요"
            onChange={getEmailHandler}
          ></input>
          <button
            className="findUserInfoBtn"
            onClick={() => dispatch(pwFinder(email))}
          >
            패스워드 찾기
          </button>
        </div>
      </div>
    </>
  );
}

export default FindUserInfo;

import axios from "axios";
import { useEffect, useState } from "react";
import "../css/ModifyUserInfo.scss";

function ModifyUserInfo() {
  let token = localStorage.getItem("token");
  const [userData, setUserData] = useState<any>();
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pwdSwitch, setPwdSwitch] = useState<boolean>(true);
  const [phoneSwitch, setPhoneSwitch] = useState<boolean>(true);

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

  const getNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newName: string = name;
    newName = e.target.value;
    setName(newName);
    console.log(newName);
  };
  const getNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNickName: string = nickName;
    newNickName = e.target.value;
    setNickName(newNickName);
    console.log(newNickName);
  };
  const getPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPw: string = pw;
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
    newPw = e.target.value;
    if (!regExp.test(newPw)) {
      setPwdSwitch(false);
    } else {
      setPwdSwitch(true);
      setPw(newPw);
    }
  };
  const getPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhone: string = phone;
    let regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    newPhone = e.target.value;
    if (!regExp.test(newPhone)) {
      console.log("전화번호 형식에 맞지 않습니다.");
      setPhoneSwitch(false);
    } else {
      setPhoneSwitch(true);
      setPhone(newPhone);
    }
  };

  return (
    <>
      <div className="ModifyUserInfoSection">
        change
        <div>
          이름 변경{" "}
          <input placeholder={userData?.name} onChange={getNameHandler} />
        </div>
        <div>
          닉네임 변경{" "}
          <input
            placeholder={userData?.nickname}
            onChange={getNickNameHandler}
          />
          <button
            onClick={() => {
              axios
                .put(
                  "https://localhost:4000/mypage/userUpdate",
                  {
                    nickname: nickName,
                  },
                  {
                    headers: {
                      authorization: `bearer ${token}`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res);
                  alert("사용가능한 닉네임입니다!");
                })
                .catch((err) => {
                  console.log(err);
                  alert("사용중인 닉네임입니다!");
                });
            }}
          >
            중복 확인
          </button>
        </div>
        <div>
          패스워드 변경{" "}
          <input
            type="password"
            placeholder="영문, 숫자 포함 8자 이상"
            onChange={getPwHandler}
          />
          {pwdSwitch ? null : (
            <div>하나 이상의 영문과 숫자를 포함하여 8자 이상이어야 합니다</div>
          )}
          {pwdSwitch && pw.length > 7 ? <div>ok</div> : null}
        </div>
        <div>
          폰 번호 변경{" "}
          <input
            placeholder="'-'없이 숫자만 입력해주세요"
            onChange={getPhoneHandler}
          />
          {phoneSwitch ? null : <div>휴대폰 번호를 확인해주세요</div>}
          {phoneSwitch && (phone.length === 10 || phone.length === 11) ? (
            <div>ok</div>
          ) : null}
        </div>
        <button
          onClick={() => {
            axios
              .put(
                "https://localhost:4000/mypage/userUpdate",
                {
                  name: name,
                  password: pw,
                  nickname: nickName,
                  phone: phone,
                },
                {
                  headers: {
                    authorization: `bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                alert(res.data.message);
                window.location.assign("http://localhost:3000/mypage");
              })
              .catch((err) => {
                alert("닉네임 변경 시, 중복을 확인해주세요");
              });
          }}
        >
          회원정보 수정
        </button>
      </div>
    </>
  );
}

export default ModifyUserInfo;

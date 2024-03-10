import axios from "axios";
import { Dispatch } from "redux";
import "dotenv/config";

export const SignUp = "SignUp";
export const SignUp_FAIL = "SignUp_FAIL";

export const getSignup =
  (
    email: string,
    password: string,
    name: string,
    nickname: string,
    phone: string
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`,
        {
          email: email,
          password: password,
          name: name,
          nickname: nickname,
          phone: phone,
        },
        {
          headers: {
            withCredentials: true,
          },
        }
      );
      console.log("회원가입 응답", res);
      //   const token = res.data.accessToken;
      dispatch({
        email: email,
        password: password,
        name: name,
        nickname: nickname,
        phone: phone,
        type: SignUp,
      });
    } catch (error) {
      dispatch({
        email: email,
        password: password,
        name: name,
        nickname: nickname,
        phone: phone,
        type: SignUp_FAIL,
      });
    }
  };

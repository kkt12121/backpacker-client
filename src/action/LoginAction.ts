import axios from "axios";
import { Dispatch } from "redux";
import "dotenv/config";

export const GET_LOGIN_TOKEN = "GET_LOGIN_TOKEN";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const getLoginToken =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: { "content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("로그인응답", res);
      const token = res.data.accessToken;
      localStorage.setItem("token", token);
      dispatch({
        email: email,
        password: password,
        type: GET_LOGIN_TOKEN,
        payload: token,
      });
    } catch (error) {
      dispatch({
        email: email,
        password: password,
        type: LOGIN_FAIL,
      });
    }
  };

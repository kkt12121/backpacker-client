import axios from "axios";
import { Dispatch } from "redux";
import "dotenv/config";

export const FIND_EMAIL = "FIND_EMAIL";
export const FIND_PASSWORD = "FIND_PASSWORD";
export const FAIL_TO_FIND = "FAIL_TO_FIND";

export const emailFinder =
  (name: string, phone: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/findEmail`,
        {
          name: name,
          phone: phone,
        },
        {
          withCredentials: true,
        }
      );
      const email = res.data.email;
      dispatch({
        type: FIND_EMAIL,
        payload: email,
      });
    } catch (error) {
      dispatch({
        type: FAIL_TO_FIND,
      });
    }
  };

export const pwFinder = (email: string) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/user/findPw`,
      {
        email: email,
      },
      {
        withCredentials: true,
      }
    );
    const createNewPw = res.data.success;
    dispatch({
      type: FIND_PASSWORD,
      payload: createNewPw,
    });
  } catch (error) {
    dispatch({
      type: FAIL_TO_FIND,
    });
  }
};

import axios from "axios";
import { Dispatch } from "redux";

export const FIND_EMAIL = "FIND_EMAIL";
export const FIND_PASSWORD = "FIND_PASSWORD";
export const FAIL_TO_FIND = "FAIL_TO_FIND";

export const emailFinder =
  (name: string, phone: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        "https://localhost:4000/user/findEmail",
        {
          name: name,
          phone: phone,
        },
        {
          headers: { withCredentials: true },
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
      "https://localhost:4000/user/findPw",
      {
        email: email,
      },
      {
        headers: { withCredentials: true },
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

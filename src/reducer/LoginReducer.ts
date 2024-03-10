import { GET_LOGIN_TOKEN, LOGIN_FAIL } from "action/LoginAction";
import "dotenv/config";

let loginState: {
  email?: string;
  password?: string;
  accesstoken?: string;
  success: boolean;
} = {
  success: false,
};
interface loginAct {
  email?: string;
  password?: string;
  type: string;
  payload?: string;
}

const loginReducer = (state = loginState, action: loginAct) => {
  switch (action.type) {
    case GET_LOGIN_TOKEN:
      window.location.assign(`${process.env.REACT_APP_CLIENT_URL}`);
      return {
        ...state,
        email: action.email,
        password: action.password,
        accesstoken: action.payload,
        success: true,
      };

    case LOGIN_FAIL:
      alert("이메일과 비밀번호를 확인해주세요!");
      return {
        ...state,
        email: action.email,
        password: action.password,
        success: false,
      };

    default:
      return state;
  }
};

export default loginReducer;

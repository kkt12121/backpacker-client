import { SignUp, SignUp_FAIL } from "action/SignupAction";
import { useHistory } from "react-router-dom";
let signUpState: {
  email?: string;
  password?: string;
  name?: string;
  nickname?: string;
  phone?: string;
  success: boolean;
} = {
  success: false,
};
interface signUpAct {
  email?: string;
  password?: string;
  name?: string;
  nickname?: string;
  phone?: string;
  type: string;
}

const SignupReducer = (state = signUpState, action: signUpAct) => {
  switch (action.type) {
    case SignUp:
      alert("회원가입에 성공하였습니다.");
      window.location.assign(`http://localhost:3000/`);
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
        nickname: action.nickname,
        phone: action.phone,
      };

    case SignUp_FAIL:
      alert("양식에 맞게 회원가입 작성을 해주세요.");
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
        nickname: action.nickname,
        phone: action.phone,
        success: false,
      };

    default:
      return state;
  }
};

export default SignupReducer;

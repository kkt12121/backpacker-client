import { SignUp, SignUp_FAIL } from "action/SignupAction";

let signUpState: {
  email?: string;
  password?: string;
  nickname?: string;
  name?: string;
  phone?: string;
  success: boolean;
} = {
  success: false,
};
interface signUpAct {
  email?: string;
  password?: string;
  nickname?: string;
  name?: string;
  phone?: string;
  type: string;
}

const SignupReducer = (state = signUpState, action: signUpAct) => {
  switch (action.type) {
    case SignUp:
      return {
        ...state,
        email: action.email,
        password: action.password,
        nickname: action.nickname,
        name: action.name,
        phone: action.phone,
      };

    case SignUp_FAIL:
      return {
        ...state,
        email: action.email,
        password: action.password,
        nickname: action.nickname,
        name: action.name,
        phone: action.phone,
        success: false,
      };

    default:
      return state;
  }
};

export default SignupReducer;

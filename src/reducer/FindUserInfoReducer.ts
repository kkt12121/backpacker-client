import {
  FAIL_TO_FIND,
  FIND_EMAIL,
  FIND_PASSWORD,
} from "action/FindUserInfoAction";

let findEmailState: {
  email?: string | boolean;
  success: boolean;
} = {
  success: false,
};
let findPwState: {
  success: boolean;
} = {
  success: false,
};
interface findInfoAction {
  type: string;
  payload: string | boolean;
}

export const findEmailReducer = (
  state = findEmailState,
  action: findInfoAction
): typeof findEmailState => {
  switch (action.type) {
    case FIND_EMAIL:
      return {
        ...state,
        email: action.payload,
        success: true,
      };
    case FAIL_TO_FIND:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export const findPwReducer = (state = findPwState, action: findInfoAction) => {
  switch (action.type) {
    case FIND_PASSWORD:
      alert("이메일 주소로 임시 비밀번호가 전송되었습니다");
      return {
        ...state,
        success: true,
      };
    case FAIL_TO_FIND:
      alert("입력을 확인하세요");
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

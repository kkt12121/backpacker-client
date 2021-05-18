import {
  IS_CLICK,
  IS_CLICK_CLOSE,
  LOGIN_MODAL_CLICK,
  LOGIN_MODAL_CLICK_CLOSE,
} from "action/ModalClickAction";

let isClick = false;

let loginModalClick = false;

export const ModalClickReducer = (state = isClick, action: any) => {
  switch (action.type) {
    case IS_CLICK:
      return true;
    case IS_CLICK_CLOSE:
      return false;
    default:
      return state;
  }
};

export const LoginModalClick = (state = loginModalClick, action: any) => {
  switch (action.type) {
    case LOGIN_MODAL_CLICK:
      return true;
    case LOGIN_MODAL_CLICK_CLOSE:
      return false;
    default:
      return state;
  }
};

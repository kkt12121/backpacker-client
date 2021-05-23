import {
  IS_CLICK,
  IS_CLICK_CLOSE,
  LOGIN_MODAL_CLICK,
  LOGIN_MODAL_CLICK_CLOSE,
  MAP_OPEN,
  MAP_CLOSE,
  modalClickAction,
  modalloginAction,
  mapAction,
} from "action/ModalClickAction";

let isClick = false;

let loginModalClick = false;

let mapClick = false;
export const ModalClickReducer = (
  state = isClick,
  action: modalClickAction
) => {
  switch (action.type) {
    case IS_CLICK:
      return true;
    case IS_CLICK_CLOSE:
      return false;
    default:
      return state;
  }
};

export const LoginModalClick = (
  state = loginModalClick,
  action: modalloginAction
) => {
  switch (action.type) {
    case LOGIN_MODAL_CLICK:
      return true;
    case LOGIN_MODAL_CLICK_CLOSE:
      return false;
    default:
      return state;
  }
};

export const MapClick = (state = mapClick, action: mapAction) => {
  switch (action.type) {
    case MAP_OPEN:
      return true;
    case MAP_CLOSE:
      return false;
    default:
      return state;
  }
};

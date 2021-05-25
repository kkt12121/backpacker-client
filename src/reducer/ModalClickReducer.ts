import {
  IS_CLICK,
  IS_CLICK_CLOSE,
  LOGIN_MODAL_CLICK,
  LOGIN_MODAL_CLICK_CLOSE,
  MAP_OPEN,
  MAP_CLOSE,
  MAP_ITEM_OPEN,
  MAP_ITEM_CLOSE,
  INVITE_OPEN,
  INVITE_CLOSE,
  CONTENT_ITEM_MAP_OPEN,
  CONTENT_ITEM_MAP_CLOSE,
  modalClickAction,
  modalloginAction,
  mapAction,
  mapItemAction,
} from "action/ModalClickAction";

let isClick = false;

let loginModalClick = false;

let mapClick = false;

let mapItemClick = false;

let inviteClick = false;

let contentItemMapClick = false;
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
export const MapItemClick = (state = mapItemClick, action: mapItemAction) => {
  switch (action.type) {
    case MAP_ITEM_OPEN:
      return true;
    case MAP_ITEM_CLOSE:
      return false;
    default:
      return state;
  }
};
export const InviteClick = (state = inviteClick, action: any) => {
  switch (action.type) {
    case INVITE_OPEN:
      return true;
    case INVITE_CLOSE:
      return false;
    default:
      return state;
  }
};
export const ContentItemMapClick = (
  state = contentItemMapClick,
  action: any
) => {
  switch (action.type) {
    case CONTENT_ITEM_MAP_OPEN:
      return true;
    case CONTENT_ITEM_MAP_CLOSE:
      return false;
    default:
      return state;
  }
};

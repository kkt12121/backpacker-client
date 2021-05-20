export const IS_CLICK = "IS_CLICK";
export const IS_CLICK_CLOSE = "IS_CLICK_CLOSE";
export const LOGIN_MODAL_CLICK = "LOGIN_MODAL_CLICK";
export const LOGIN_MODAL_CLICK_CLOSE = "LOGIN_MODAL_CLICK_CLOSE";
export const MAP_OPEN = "MAP_OPEN";
export const MAP_CLOSE = "MAP_CLOSE";

export const isClickAction = () => {
  return {
    type: IS_CLICK,
  };
};

export const isClickCloseAction = () => {
  return {
    type: IS_CLICK_CLOSE,
  };
};

export const loginModalClickAction = () => {
  return {
    type: LOGIN_MODAL_CLICK,
  };
};

export const loginModalClickCloseAction = () => {
  return {
    type: LOGIN_MODAL_CLICK_CLOSE,
  };
};

export const mapOpen = () => {
  return {
    type: MAP_OPEN,
  };
};
export const mapClose = () => {
  return {
    type: MAP_CLOSE,
  };
};

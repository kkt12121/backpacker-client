export const IS_CLICK = "IS_CLICK";
export const IS_CLICK_CLOSE = "IS_CLICK_CLOSE";
export const LOGIN_MODAL_CLICK = "LOGIN_MODAL_CLICK";
export const LOGIN_MODAL_CLICK_CLOSE = "LOGIN_MODAL_CLICK_CLOSE";
export const MAP_OPEN = "MAP_OPEN";
export const MAP_CLOSE = "MAP_CLOSE";
export const MAP_ITEM_OPEN = "MAP_ITEM_OPEN";
export const MAP_ITEM_CLOSE = "MAP_ITEM_CLOSE";
export const INVITE_OPEN = "INVITE_OPEN";
export const INVITE_CLOSE = "INVITE_CLOSE";
export const CONTENT_ITEM_MAP_OPEN = "CONTENT_ITEM_MAP_OPEN";
export const CONTENT_ITEM_MAP_CLOSE = "CONTENT_ITEM_MAP_CLOSE";
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
export const mapItemOpen = () => {
  return {
    type: MAP_ITEM_OPEN,
  };
};
export const mapItemClose = () => {
  return {
    type: MAP_ITEM_CLOSE,
  };
};
export const inviteOpen = () => {
  return {
    type: INVITE_OPEN,
  };
};
export const inviteClose = () => {
  return {
    type: INVITE_CLOSE,
  };
};

export const contentItemMapOpen = () => {
  return {
    type: CONTENT_ITEM_MAP_OPEN,
  };
};
export const contentItemMapClose = () => {
  return {
    type: CONTENT_ITEM_MAP_CLOSE,
  };
};
type clickOpenAction = ReturnType<typeof isClickAction>;
type clickCloseAction = ReturnType<typeof isClickCloseAction>;
export type modalClickAction = clickOpenAction | clickCloseAction;
type loginClickAction = ReturnType<typeof loginModalClickAction>;
type loginClickCloseAction = ReturnType<typeof loginModalClickCloseAction>;
export type modalloginAction = loginClickAction | loginClickCloseAction;
type mapOpenAction = ReturnType<typeof mapOpen>;
type mapCloseAction = ReturnType<typeof mapClose>;
export type mapAction = mapOpenAction | mapCloseAction;
type mapItemOpenAction = ReturnType<typeof mapOpen>;
type mapItemCloseAction = ReturnType<typeof mapClose>;
export type mapItemAction = mapItemOpenAction | mapItemCloseAction;

import { Dispatch } from "redux";

export const GET_CONTENT = "GET_CONTENT";

export const ContentAction = (items: Object) => (dispatch: Dispatch) => {
  dispatch({
    type: GET_CONTENT,
    payload: items,
  });
};

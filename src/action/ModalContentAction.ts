import { Dispatch } from "redux";

export const GET_MODAL_CONTENT = "GET_MODAL_CONTENT";
export const Modal = (content: object) => (dispatch: Dispatch) => {
  dispatch({
    type: GET_MODAL_CONTENT,
    payload: content,
  });
};

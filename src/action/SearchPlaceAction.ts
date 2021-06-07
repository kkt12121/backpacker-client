import { Dispatch } from "redux";

export const SEARCH_PLACE = "SEARCH_PLACE";

export const searchPlace = () => (dispatch: Dispatch) => {
  dispatch({
    type: SEARCH_PLACE,
    // payload: city,
  });
};

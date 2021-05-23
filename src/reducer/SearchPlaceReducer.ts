import { SEARCH_PLACE } from "action/SearchPlaceAction";

let initialState = {
  place: "경복궁",
};
interface placeAct {
  place: string;
  type: string;
  payload?: string;
}

export const searchPlaceReducer = (state = initialState, action: placeAct) => {
  switch (action.type) {
    case SEARCH_PLACE:
      return {
        ...state,
        place: action.payload,
      };
    default:
      return state;
  }
};

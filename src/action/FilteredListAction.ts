import axios from "axios";
import { Dispatch } from "redux";

export const FILTER_CHANGE = "FILTER_CHANGE";

export const FilteredListAction =
  (city: string, budget: number) => async (dispatch: Dispatch) => {
    const res = await axios.post(
      "https://localhost:4000/content/list",
      {},
      {
        headers: { withCredential: true },
      }
    );
    const data = res.data.contentList;

    let filteredList = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].touristSpot === city && data[i].totalCost <= budget) {
        filteredList.push(data[i]);
      }
    }

    dispatch({
      type: FILTER_CHANGE,
      payload: filteredList,
    });
  };

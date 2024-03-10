import axios from "axios";
import { Dispatch } from "redux";
import "dotenv/config";

export const FILTER_CHANGE = "FILTER_CHANGE";

export const FilteredListAction =
  (city: string, budget: number) => async (dispatch: Dispatch) => {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/content/list`,
      {},
      {
        headers: { withCredential: true },
      }
    );
    const data = res.data.contentList;
    console.log(data);
    let filteredList = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].touristRegion === city && data[i].totalCost <= budget) {
        filteredList.push(data[i]);
      }
    }

    dispatch({
      type: FILTER_CHANGE,
      payload: filteredList,
    });
  };

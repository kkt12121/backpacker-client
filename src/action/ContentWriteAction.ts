import axios from "axios";
import { Dispatch } from "redux";

export const IMAGE_SUCCESS = "IMAGE_SUCCESS";
export const IMAGE_FAIL = "IMAGE_FAIL";
export const CONTENT_PRICE = "CONTENT_PRICE";
export const DAY_LIST = "DAY_LIST";
export const CURRENT_DAY = "CURRENT_DAY";
export const PLAN_LIST = "PLAN_LIST";
// export const getImage =
//   (title: string, num: number) => async (dispatch: Dispatch) => {
//     try {
//       const res = await axios.post("http://localhost:4000/api/detailList", {
//         title: title,
//         num: num,
//       });

//       console.log("이미지", res.data);

//       dispatch({
//         type: IMAGE_SUCCESS,
//         payload: {
//           thumbnail: res.data.item[0].galWebImageUrl,
//           title: res.data.item[0].galTitle,
//         },
//       });
//     } catch (err) {
//       dispatch({
//         type: IMAGE_FAIL,
//       });
//     }
//   };

// export type getImageAction = ReturnType<typeof getImage>;

export const getCurrentDay = (currentDay: number) => {
  return {
    type: CURRENT_DAY,
    payload: currentDay,
  };
};

export const getPrice = (price: number) => {
  return {
    type: CONTENT_PRICE,
    payload: price,
  };
};

export const getDayList = (daylist: [(string | undefined)?] | null) => {
  return {
    type: DAY_LIST,
    payload: daylist,
  };
};

export const getPlanList = (planList: Object[][]) => {
  return {
    type: PLAN_LIST,
    payload: planList,
  };
};

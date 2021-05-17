import axios from "axios";
import { Dispatch } from "redux";

export const GET_STORE_DATA = "GET_STORE_DATA";

export const getStoreData = () => async (dispatch: Dispatch) => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = res.data;

  //   return {
  //     type: GET_STORE_DATA,
  //     payload: { id: "1" },
  //   };

  dispatch({
    type: GET_STORE_DATA,
    payload: data,
  });
};

// http://apis.data.go.kr/B553077/api/open/sdsc/largeUpjongList?serviceKey=QQalyDW8noHvtisHl1Si1gL%2FS%2BizTX37FpsWEp4JwV2u2f6%2F5JJVOCXgjQ2KGnJs7XFTTWrM0ccR4Rgnims%2F4Q%3D%3D&type=json

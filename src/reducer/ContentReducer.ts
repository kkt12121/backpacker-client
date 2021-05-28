import { GET_CONTENT } from "action/ContentAction";

export let contentState: {
  items?: [
    {
      _id: string;
      price: number;
      averagePrice: number;
      userinfo: [string];
      place: string;
      category: string;
      img: string;
      mapx: number;
      mapy: number;
      detail: string;
      tel: string;
      address: string;
      contentId: number;
      __v: number;
    }
  ];
} = {};

interface contentAct {
  type: string;
  payload?: [
    {
      _id: string;
      price: number;
      averagePrice: number;
      userinfo: [string];
      place: string;
      category: string;
      img: string;
      mapx: number;
      mapy: number;
      detail: string;
      tel: string;
      address: string;
      contentId: number;
      __v: number;
    }
  ];
}
const ContentReducer = (state = contentState, action: contentAct) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default ContentReducer;

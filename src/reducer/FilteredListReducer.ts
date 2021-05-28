import { FILTER_CHANGE } from "action/FilteredListAction";

let filteredListState: {
  list?: [
    {
      schedule: [any];
      startDate: string;
      thumbnail: [string];
      title: string;
      totalCost: number;
      touristRegion: string;
      touristSpot: string;
      userinfo: [string];
      __v: number;
      _id: string;
    }
  ];
} = {};

interface filteredListAct {
  type: string;
  payload?: [
    {
      schedule: [any];
      startDate: string;
      thumbnail: [string];
      title: string;
      totalCost: number;
      touristRegion: string;
      touristSpot: string;
      userinfo: [string];
      __v: number;
      _id: string;
    }
  ];
}

const filteredListReducer = (
  state = filteredListState,
  action: filteredListAct
) => {
  switch (action.type) {
    case FILTER_CHANGE:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default filteredListReducer;

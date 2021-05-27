import {
  CONTENT_PRICE,
  CURRENT_DAY,
  DAY_LIST,
  GET_END_DATE,
  GET_REGION,
  GET_START_DATE,
  GET_TITLE,
  IMAGE_FAIL,
  IMAGE_SUCCESS,
  PLAN_LIST,
} from "action/ContentWriteAction";
import { totalmem } from "os";

export let currentDay: number = 0;
export let daylist: [(string | undefined)?] | null = null;
export let planList: {
  contentid?: string;
  thumbnail?: string;
  title?: string;
  mapx?: number;
  mapy?: number;
  address?: string;
}[][] = [[{}]];

export let region: string = "";
export let title: string = "";
export let startDate: string = "";
export let endDate: string = "";
export let contentItem: {
  data: { title?: string; thumbnail?: string; mapx?: string; mapy?: string }[];
} = { data: [{}] };

export let contentPrice: {
  data: [number | null];
} = { data: [null] };
export const contentItemReducer = (state = contentItem, action: any) => {
  switch (action.type) {
    case IMAGE_SUCCESS:
      let copyItem = { ...state };
      if (Object.keys(copyItem.data[0]).length === 0) {
        copyItem.data.pop();
      }
      copyItem.data.push({ ...action.payload });
      return copyItem;

    case IMAGE_FAIL:
      alert("존재하지 않는 곳입니다.");
      return state;
    default:
      return state;
  }
};

export const priceReducer = (state = contentPrice, action: any) => {
  switch (action.type) {
    case CONTENT_PRICE:
      let copyPrice = { ...state };
      copyPrice.data.push(action.payload);
      return copyPrice;

    default:
      return state;
  }
};

export const dayListReducer = (state = daylist, action: any) => {
  switch (action.type) {
    case DAY_LIST:
      let copy = [{ ...state }];
      copy = { ...action.payload };
      return copy;

    default:
      return state;
  }
};

export const currentDayReducer = (state = currentDay, action: any) => {
  switch (action.type) {
    case CURRENT_DAY:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export const planListReducer = (state = planList, action: any) => {
  switch (action.type) {
    case PLAN_LIST:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export const regionReducer = (state = region, action: any) => {
  switch (action.type) {
    case GET_REGION:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export const titleReducer = (state = title, action: any) => {
  switch (action.type) {
    case GET_TITLE:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export const startDateReducer = (state = startDate, action: any) => {
  switch (action.type) {
    case GET_START_DATE:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export const endDateReducer = (state = endDate, action: any) => {
  switch (action.type) {
    case GET_END_DATE:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

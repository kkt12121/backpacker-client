import {
  CONTENT_PRICE,
  DAY_LIST,
  IMAGE_FAIL,
  IMAGE_SUCCESS,
} from "action/ContentWriteAction";
let contentWrite: {
  data: {
    day?: string;
    testItem?: {
      title?: string;
      thumbnail?: string;
    }[];
    totalCost?: number;
  }[];
} = {
  data: [
    {
      day: "1",
      testItem: [
        {
          title: "경복궁",
          thumbnail: "http://tong.visitkorea.or.kr/cms2/website/50/976150.jpg",
        },
        {
          title: "독도",
          thumbnail: "http://tong.visitkorea.or.kr/cms2/website/08/2540408.jpg",
        },
      ],
      totalCost: 50000,
    },
    {
      day: "2",
      testItem: [
        {
          title: "우미관",
          thumbnail: "http://tong.visitkorea.or.kr/cms2/website/50/976150.jpg",
        },
        {
          title: "울릉도",
          thumbnail: "http://tong.visitkorea.or.kr/cms2/website/08/2540408.jpg",
        },
      ],
      totalCost: 50000,
    },
  ],
};

export let daylist: [(string | undefined)?] | null = null;

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

export const test = (state = contentWrite, action: any) => {
  switch (action.type) {
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

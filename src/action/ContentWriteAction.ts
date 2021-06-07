export const IMAGE_SUCCESS = "IMAGE_SUCCESS";
export const IMAGE_FAIL = "IMAGE_FAIL";
export const CONTENT_PRICE = "CONTENT_PRICE";
export const DAY_LIST = "DAY_LIST";
export const CURRENT_DAY = "CURRENT_DAY";
export const PLAN_LIST = "PLAN_LIST";
export const GET_REGION = "GET_REGION";
export const GET_TITLE = "GET_TITLE";
export const GET_START_DATE = "GET_START_DATE";
export const GET_END_DATE = "GET_END_DATE";

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

export const getRegion = (region: string) => {
  return {
    type: GET_REGION,
    payload: region,
  };
};

export const getTitle = (title: string) => {
  return {
    type: GET_TITLE,
    payload: title,
  };
};

export const getStartDate = (startDate: string) => {
  return {
    type: GET_START_DATE,
    payload: startDate,
  };
};

export const getEndDate = (endDate: string) => {
  return {
    type: GET_END_DATE,
    payload: endDate,
  };
};

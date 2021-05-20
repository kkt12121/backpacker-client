import { Dispatch } from "redux";

export const LIST_CITY_UPDATE = "LIST_CITY_UPDATE";
export const LIST_BUDGET_UPDATE = "LIST_BUDGET_UPDATE";

export const listCityFind = (city: string) => (dispatch: Dispatch) => {
  dispatch({
    type: LIST_CITY_UPDATE,
    payload: city,
  });
};

export const listBudgetFind = (budget: number) => (dispatch: Dispatch) => {
  dispatch({
    type: LIST_BUDGET_UPDATE,
    payload: budget,
  });
};

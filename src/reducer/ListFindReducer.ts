import { LIST_BUDGET_UPDATE, LIST_CITY_UPDATE } from "action/ListFindAction";

let listCityState: {
  city: string;
} = {
  city: "서울",
};

interface updateCityListAct {
  type: string;
  payload: string;
}

let listBudgetState: {
  budget: number;
} = {
  budget: Number.MAX_SAFE_INTEGER,
};

interface updateBudgetListAct {
  type: string;
  payload: number;
}

export const listCityUpdateReducer = (
  state = listCityState,
  action: updateCityListAct
): typeof listCityState => {
  switch (action.type) {
    case LIST_CITY_UPDATE:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export const listBudgetUpdateReducer = (
  state = listBudgetState,
  action: updateBudgetListAct
) => {
  switch (action.type) {
    case LIST_BUDGET_UPDATE:
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

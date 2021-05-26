import { combineReducers } from "redux";
import {
  LoginModalClick,
  ModalClickReducer,
  MapClick,
  MapItemClick,
  InviteClick,
  ContentItemMapClick,
} from "./ModalClickReducer";
import TestReducer from "./TestReducer";
import loginReducer from "./LoginReducer";
import { findEmailReducer, findPwReducer } from "./FindUserInfoReducer";
import SignupReducer from "./SignupReducer";
import {
  listBudgetUpdateReducer,
  listCityUpdateReducer,
} from "./ListFindReducer";

import filteredListReducer from "./FilteredListReducer";
import {
  contentItemReducer,
  currentDayReducer,
  dayListReducer,
  planListReducer,
  priceReducer,
  test,
} from "./ContentWriteReducer";

const RootReducer = combineReducers({
  TestReducer,
  loginReducer,
  findEmailReducer,
  findPwReducer,
  ModalClickReducer,
  LoginModalClick,
  MapClick,
  MapItemClick,
  InviteClick,
  ContentItemMapClick,
  SignupReducer,
  listCityUpdateReducer,
  listBudgetUpdateReducer,
  filteredListReducer,
  contentItemReducer,
  priceReducer,
  test,
  dayListReducer,
  currentDayReducer,
  planListReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

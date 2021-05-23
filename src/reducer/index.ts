import { combineReducers } from "redux";
import {
  LoginModalClick,
  ModalClickReducer,
  MapClick,
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

const RootReducer = combineReducers({
  TestReducer,
  loginReducer,
  findEmailReducer,
  findPwReducer,
  ModalClickReducer,
  LoginModalClick,
  MapClick,
  SignupReducer,
  listCityUpdateReducer,
  listBudgetUpdateReducer,
  filteredListReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

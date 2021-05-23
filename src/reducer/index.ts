import { combineReducers } from "redux";
import {
  LoginModalClick,
  ModalClickReducer,
  MapClick,
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
import { searchPlaceReducer } from "./SearchPlaceReducer";
const RootReducer = combineReducers({
  TestReducer,
  loginReducer,
  findEmailReducer,
  findPwReducer,
  ModalClickReducer,
  LoginModalClick,
  MapClick,
  InviteClick,
  ContentItemMapClick,
  SignupReducer,
  listCityUpdateReducer,
  listBudgetUpdateReducer,
  searchPlaceReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

import { combineReducers } from "redux";
import { LoginModalClick, ModalClickReducer } from "./ModalClickReducer";
import TestReducer from "./TestReducer";
import loginReducer from "./LoginReducer";
import { findEmailReducer, findPwReducer } from "./FindUserInfoReducer";
import SignupReducer from "./SignupReducer";

const RootReducer = combineReducers({
  TestReducer,
  loginReducer,
  findEmailReducer,
  findPwReducer,
  ModalClickReducer,
  LoginModalClick,
  SignupReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import loginReducer from "./LoginReducer";
import { findEmailReducer, findPwReducer } from "./FindUserInfoReducer";

const RootReducer = combineReducers({
  TestReducer,
  loginReducer,
  findEmailReducer,
  findPwReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

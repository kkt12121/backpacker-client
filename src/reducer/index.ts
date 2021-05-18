import { combineReducers } from "redux";
import { LoginModalClick, ModalClickReducer } from "./ModalClickReducer";
import TestReducer from "./TestReducer";
const RootReducer = combineReducers({
  TestReducer,
  ModalClickReducer,
  LoginModalClick,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

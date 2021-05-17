import RootReducer from "reducer";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;

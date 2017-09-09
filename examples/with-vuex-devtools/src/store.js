import { createStore, combineReducers } from "redux";
import User from "./reducers/User";

const store = createStore(combineReducers({ User }));

export default store;

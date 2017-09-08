import { createStore, combineReducers } from "redux";

import User from "./reducers/User";

const reducers = combineReducers({ User });

const store = createStore(reducers);

export default store;

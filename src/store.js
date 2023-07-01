import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers";

const composedFunctions = composeWithDevTools(...[applyMiddleware(thunk)]);

const store = createStore(allReducers, composedFunctions);

export default store;

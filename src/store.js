// eslint-disable-next-line no-unused-vars
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import UserReducer from "./reducer/reducer";

export default createStore(
  UserReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

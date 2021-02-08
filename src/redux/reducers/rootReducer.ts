import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { History } from "history";

export const rootReducer = (history: History) => combineReducers({
  cart: cartReducer,
  auth: userReducer,
  router: connectRouter(history)
})
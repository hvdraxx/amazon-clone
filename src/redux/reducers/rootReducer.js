import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { cartReducer } from "./cartReducer";

export const rootReducer = (history) => combineReducers({
  cart: cartReducer,
  router: connectRouter(history)
})
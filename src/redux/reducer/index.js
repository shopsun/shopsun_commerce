import handleCart from "./handleCart";
import handleProduct from "./handleProduct";
import handleCheckOut from "./handleCheckOut";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  handleProduct,
  handleCheckOut,
});

export default rootReducers;

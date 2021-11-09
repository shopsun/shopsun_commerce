import handleCart from "./handleCart";
import handleProduct from "./handleProduct";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  handleProduct,
});

export default rootReducers;

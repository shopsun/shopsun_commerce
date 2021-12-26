import handleCart from "./handleCart";
import handleProduct from "./handleProduct";
import handleCheckOut from "./handleCheckOut";
import handleToken from "./handleToken";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  handleProduct,
  handleCheckOut,
  handleToken
});

export default rootReducers;

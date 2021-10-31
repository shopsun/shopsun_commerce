import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  products: [],
  productsDetail: [],
};

const commerce = (state = initialState, action) => {
  switch (action.type) {
    case "ADDProducts":
      return {
        ...state,
        products: action.payload,
      };
    case "SelectedProduct":
      return {
        ...state,
        productsDetail: { ...action.payload },
      };
    default:
      return state;
  }
};

const store = createStore(commerce, applyMiddleware(thunk));

export default store;

// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";

// const initialState = {
//   products: [],
//   productsDetail: [],
//   cart: [],
// };

// const commerce = (state = initialState, action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case "ADDProducts":
//       return {
//         ...state,
//         products: action.payload,
//       };
//     case "SelectedProduct":
//       return {
//         ...state,
//         productsDetail: { ...action.payload },
//       };
//     case "ADDItemToCart":
//       // CHECK jika product telah ada
//       console.log(product);
//       const exist = state.cart.find((x) => x.id === product.id);
//       console.log("is exist ", exist);
//       if (exist) {
//         // Menambahkan Quantity
//         return state.cart.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         const product = action.payload;
//         return [
//           ...state.cart,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }
//     case "DellItemToCart":
//       const exist1 = state.cart.find((x) => x.id === product.id);
//       if (exist1.qty === 1) {
//         return state.cart.filter((x) => x.id !== exist1.id);
//       } else {
//         return state.cart.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }

//     default:
//       return state;
//   }
// };

// const store = createStore(commerce, applyMiddleware(thunk));

// export default store;

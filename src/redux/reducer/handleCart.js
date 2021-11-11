const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // CHECK jika product telah ada
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Menambahkan Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case "DECREMENTiTEM":
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      );
      break;
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      return state.filter((x) => x.id !== exist1.id);
      break;
    case "REMOVECHART":
      return (state = []);
      break;
    default:
      return state;
      break;
  }
};

// if (exist2.qty === 1) {
//   return state.filter((x) => x.id !== exist1.id);
// } else {
//   return state.map((x) =>
//     x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//   );
// }

export default handleCart;

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

    case "DECREMENTiTEM":
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      );

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      return state.filter((x) => x.id !== exist1.id);

    case "REMOVECHART":
      return (state = []);

    default:
      return state;
  }
};

export default handleCart;

const products = [];

const handleProduct = (state = products, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDPRODUCT":
      return { ...products, product: product };
    case "UPDATESTOCKFROMADMIN":
      const exist = state.product.find((x) => x.id === product.id);
      if (exist) {
        // Menambahkan Quantity
        let data = state.product.map((x) =>
          x.id === product.id ? { ...x, qty: product.qty } : x
        );
        return { product: data };
      }
      break;
    case "UPDATESTOCK":
      const result = state.product.map((stock) => {
        const foundRec = product.find((product) => product.id === stock.id);
        if (foundRec) {
          return {
            ...foundRec,
            qty: stock.qty - foundRec.qty,
          };
        }
        return stock;
      });
      return { product: result };
    default:
      return state;
  }
};

export default handleProduct;

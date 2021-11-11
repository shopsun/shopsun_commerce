const products = [];

const handleProduct = (state = products, action) => {
  const product = action.payload;
  //   console.log(product);
  switch (action.type) {
    case "ADDPRODUCT":
      return { ...products, product: product };
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

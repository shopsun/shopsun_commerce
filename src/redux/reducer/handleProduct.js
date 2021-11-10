const products = {};

const handleProduct = (state = products, action) => {
  const product = action.payload;
  //   console.log(product);
  switch (action.type) {
    case "ADDPRODUCT":
      return { ...products, product: product };
    default:
      return state;
  }
};

export default handleProduct;

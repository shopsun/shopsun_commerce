const products = [];

const handleCheckOut = (state = products, action) => {
  const product = action.payload;
  switch (action.type) {
    case "CHECKOUTCHART":
      return { ...products, product: product };
      break;
    default:
      return state;
      break;
  }
};

export default handleCheckOut;

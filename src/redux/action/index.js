// Menambahkan Product
export const addProduct = (product) => {
  return {
    type: "ADDPRODUCT",
    payload: product,
  };
};

// Untuk menambahkan product ke cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Untuk menghapus product dari cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const removeCart = () => {
  return {
    type: "REMOVECHART",
  };
};

export const TokenUser = (user) =>{
  return{
    type:"ADDTOKENUSER",
    payload:user
  }
}

// updateStock
export const updateStock = (products) => {
  return {
    type: "UPDATESTOCK",
    payload: products,
  };
};

// update Stock From Admin
export const updateStockAdmin = (products) => {
  return {
    type: "UPDATESTOCKFROMADMIN",
    payload: products,
  };
};

// Untuk mengurangi qty pada product dari cart
export const decrementCart = (product) => {
  return {
    type: "DECREMENTiTEM",
    payload: product,
  };
};

// Checkout Product
export const checkOutChart = (products) => {
  return {
    type: "CHECKOUTCHART",
    payload: products,
  };
};

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProductsComponent from "./ProductsComponent";

const ProductsListing = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch({
      type: "ADDProducts",
      payload: response.data,
    });
  };

  useEffect(() => {
    if (state.products.length === 0) {
      fetchProducts();
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-black-soft">
          Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ProductsComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;

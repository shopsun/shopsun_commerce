import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProductsComponent from "./ProductsComponent";
import Skeleton from "react-loading-skeleton";
import { addProduct } from "../../redux/action";

const ProductsListing = () => {
  const state = useSelector((state) => state.handleProduct.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state === undefined) {
      fetchProducts();
    }
  }, []);

  const fetchProducts = async () => {
    try {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          const objectData = [];
          response.data.forEach((element) => {
            let newProduct = { ...element, qty: 20 };
            objectData.push(newProduct);
          });
          dispatch(addProduct(objectData));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const LoadingSkeleton = () => {
    return (
      <>
        <Skeleton height={350}></Skeleton>
        <Skeleton height={350}></Skeleton>
        <Skeleton height={350}></Skeleton>
        <Skeleton height={350}></Skeleton>
      </>
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-blue-pastel">
          Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {state ? <ProductsComponent /> : <LoadingSkeleton />}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProductsComponent from "./ProductsComponent";
import Skeleton from "react-loading-skeleton";
import { addProduct } from "../../redux/action";

const ProductsListing = () => {
  const state = useSelector((state) => state.handleProduct.product);
  const dispatch = useDispatch();
  let componentMounted = true;

  // dispatch({
  //   type: "ADDProducts",
  //   payload: response.data,
  // });
  // console.log("state : ", state);
  if (state === undefined) {
    console.log("kosong");
  } else {
    console.log("gk kosong");
  }
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
          // console.log(response.data);
          const objectData = [];
          response.data.forEach((element) => {
            // console.log(element);
            let newProduct = { ...element, qty: 20 };
            objectData.push(newProduct);
          });
          // console.log(objectData);
          dispatch(addProduct(objectData));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("Error ", error);
    }
    return () => {
      componentMounted = false;
    };
  };

  console.log(state);

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
        <h2 className="text-2xl font-extrabold tracking-tight text-black-soft">
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

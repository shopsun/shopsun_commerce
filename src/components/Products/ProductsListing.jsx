import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProductsComponent from "./ProductsComponent";
import Skeleton from "react-loading-skeleton";

const ProductsListing = () => {
  // const state = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  let componentMounted = true;

  // dispatch({
  //   type: "ADDProducts",
  //   payload: response.data,
  // });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        if (componentMounted) {
          setData(await response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error ", error);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchProducts();
  }, []);

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
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <ProductsComponent dataProduct={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;

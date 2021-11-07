import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import axios from "axios";
import StarRating from "react-star-rating-component";
import Skeleton from "react-loading-skeleton";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  // const productDetail = useSelector((state) => state);
  // const { image, title, price, category, description, rating } = product;
  // dispatch({
  //   type: "SelectedProduct",
  //   payload: response.data,
  // });

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (componentMounted) {
          setProduct(await response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error ", error);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchProductDetail();
  }, []);

  // const addProductToCart = (products) => {
  //   dispatch({
  //     type: "ADDItemToCart",
  //     payload: products,
  //   });
  // };

  const Loading = () => {
    return (
      <div className="grid grid-cols-2">
        <Skeleton height={600}></Skeleton>

        <Skeleton height={50} width={300}></Skeleton>
        <Skeleton height={75}></Skeleton>
        <Skeleton height={25} width={150}></Skeleton>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
      {loading ? (
        <Loading />
      ) : (
        product && (
          <div className=" grid grid-cols-2 gap-y-10 gap-x-6 p-10 ">
            <div className="w-full min-h- bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-full lg:aspect-none flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-top object-fit lg:w-full lg:h-full"
              />
            </div>

            <div className=" p-14 grid grid-cols-1 gap-10 lg:h-screen">
              <h1 className=" text-4xl font-bold self-center ">
                {product.title}
              </h1>
              <div className=" flex flex-col justify-between">
                <h4 className=" font-bold text-2xl">${product.price}</h4>
                {/* Stars Rating */}
                <div className="flex items-center  ">
                  <StarRating starCount={5} value={product.rating.rate} />
                  <span className="font-medium items-center text-lg pl-2">
                    {product.rating.rate}
                  </span>
                </div>
                <span>{product.rating.count} Reviewers</span>
              </div>
              <h5 className="bg-yellow-500 self-center justify-self-start px-4 py-1 text-yellow-500 font-medium bg-opacity-10 backdrop-filter rounded-full">
                {product.category}
              </h5>
              <p className=" text-lg">{product.description}</p>
              <button
                className="bg-green-500 text-white text-xl self-start justify-self-center w-max px-8 py-2 rounded-xl font-medium"
                onClick={() => addProduct(product)}>
                Add to cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetails;

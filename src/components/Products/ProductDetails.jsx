import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/action";
import StarRating from "react-star-rating-component";

const ProductDetails = () => {
  const state = useSelector((state) => state.handleProduct.product);
  const history = useHistory();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    state.forEach((element) => {
      if (element.id == productId) {
        setProduct(element);
      }
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
      {product && (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-6 md:p-10 ">
          <div className="w-full md:min-h-full bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-full lg:aspect-none flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-center object-fit lg:w-full lg:h-full"
            />
          </div>

          <div className=" p-14 grid grid-cols-1 gap-10 lg:h-screen">
            <h1 className=" text-4xl font-bold self-center ">
              {product.title}
            </h1>
            <div className=" flex flex-col justify-between ">
              <h4 className=" font-bold text-2xl">${product.price}</h4>
              {/* Stars Rating */}
              <div className="flex items-center  ">
                <StarRating starCount={5} value={product.rating.rate} />
                <span className="font-medium items-center text-lg pl-2">
                  {product.rating.rate}
                </span>
              </div>
              <span>{product.rating.count} Reviewers</span>
              <div className="mt-2">
                <span>Stock </span>
                <input
                  className="w-8 h-8 border-2 text-center"
                  value={product.qty}
                />
              </div>
            </div>
            <h5 className="bg-yellow-500 self-center justify-self-start px-4 py-1 text-yellow-500 font-medium bg-opacity-10 backdrop-filter rounded-full">
              {product.category}
            </h5>
            <p className=" text-lg">{product.description}</p>
            <button
              className="bg-green-500 text-white text-xl self-start justify-self-center w-max px-8 py-2 rounded-xl font-medium"
              onClick={() =>
                localStorage.getItem("token")
                  ? addProduct(product)
                  : history.push(`/login`)
              }>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

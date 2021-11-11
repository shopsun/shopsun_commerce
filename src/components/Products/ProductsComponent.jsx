import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCart } from "../../redux/action";

const ProductsComponent = () => {
  const products = useSelector((state) => state.handleProduct.product);
  const dispatch = useDispatch();
  const history = useHistory();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div className="group relative pb-14 gap-y-5 " key={id}>
        <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none p-3">
          <img
            key={id}
            src={image}
            alt={title}
            className="w-full h-full object-top object-fill lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between sm:flex-col ">
          <div>
            <h3 className="text-base sm:text-sm text-gray-700">
              <p>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </p>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
          <p className="text-base sm:text-sm font-bold sm:font-medium text-gray-900 sm:mt-3">
            ${price}
          </p>
        </div>
        <div className=" flex justify-between absolute bottom-0 w-full">
          <button
            className="bg-blue-400 text-white px-3 py-2 mt-2 text-lg rounded-md font-medium"
            onClick={() => history.push(`/product/${id}`)}>
            Details
          </button>
          <button
            className="font-bold px-3 py-2 mt-2 bg-green-500 text-white text-lg rounded-md"
            onClick={() =>
              localStorage.getItem("token")
                ? addProduct(product)
                : history.push(`/login`)
            }>
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductsComponent;

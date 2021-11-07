import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addCart } from "../../redux/action";

const ProductsComponent = ({ dataProduct }) => {
  // const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const products = dataProduct;
  const history = useHistory();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const renderList = products.map((product) => {
    console.log(product);
    const { id, title, price, image, category } = product;
    return (
      <div className="group relative pb-14" key={id}>
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            key={id}
            src={image}
            alt={title}
            className="w-full h-full object-top object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <p>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </p>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
        <div className=" flex justify-between absolute bottom-0 w-full">
          <button
            className="bg-blue-400 text-white px-3 py-2 mt-2 text-lg rounded-md font-medium"
            onClick={() => history.push(`/product/${id}`)}>
            Details
          </button>
          <button
            className="font-bold px-3 py-2 mt-2 bg-green-500 text-white text-lg rounded-md"
            onClick={() => addProduct(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductsComponent;

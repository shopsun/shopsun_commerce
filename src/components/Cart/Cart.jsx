import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart, addCart, decrementCart } from "../../redux/action";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  let history = useHistory();
  let totalQty = 0;
  // const [value, setValue] = useState(0);
  const calculeTotal = state.reduce((sum, i) => sum + i.qty * i.price, 0);
  const tempTax = calculeTotal * 0.1;
  const Tax = parseFloat(tempTax.toFixed(2));
  const total = calculeTotal + Tax;

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementCart(item));
  };

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  // const handleValueChange = (item) => {
  //   setValue(item);
  // };

  const cartItems = (cartItem) => {
    totalQty += cartItem.qty;
    return (
      <div
        className="flex p-5 gap-6 border-t-2 border-gray-100 mb-5"
        key={cartItem.id}>
        <div className="w-1/4 lg:h-60">
          <img src={cartItem.image} className="w-full h-full object-fit" />
        </div>
        <div className="grid grid-cols-4 w-4/5 gap-12">
          <div className="col-span-2">
            <span className="text-black-soft font-medium text-xl">
              {cartItem.title}
            </span>
            <span className=" block mt-2 text-gray-500 text-sm">
              {cartItem.category}
            </span>
            <p className="mt-5 text-black-soft">
              ${cartItem.price * cartItem.qty}
            </p>
          </div>
          <div className="sm:justify-self-center self-center sm:self-start ">
            <button
              type="button"
              className=" h-6 w-6 lg:h-7 lg:w-7 text-center "
              onClick={() => handleDecrement(cartItem)}>
              -
            </button>
            <input
              type="text"
              className=" h-6 w-6 lg:h-7 lg:w-7 text-center my-2 sm:mx-1"
              value={cartItem.qty}
            />
            <button
              type="button"
              className=" h-6 w-6 lg:h-7 lg:w-7 text-center"
              onClick={() => handleAdd(cartItem)}>
              +
            </button>
          </div>
          <button
            type="button"
            className="self-start items-center justify-self-end p-1 font-bold"
            onClick={() => handleClose(cartItem)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="m-24">
        <h1 className="my-10 text-3xl">Anda belum memilih item...</h1>
        <button
          className="bg-blue-400 px-5 py-2 text-white text-lg lg:text-xl font-light rounded-lg"
          onClick={() => history.push("/product")}>
          Mulai Belanja
        </button>
      </div>
    );
  };

  // state.length !== 0
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-12 font-Poppins">
      {state.length === 0 ? (
        emptyCart()
      ) : (
        <>
          <h1 className="font-bold text-3xl">Shopping Cart</h1>
          <div className="grid grid-cols-3 mt-10 gap-y-10 lg:gap-x-5">
            <div className=" col-span-3 lg:col-span-2">
              {/* mapping items cart */}
              {state.map(cartItems)}
            </div>
            <div className="bg-gray-100 col-span-3 lg:col-span-1 lg:self-start p-1 rounded-xl mt-5 lg:mt-0 ">
              <div className="grid grid-rows-5 gap-1 p-4">
                <h4 className="text-lg self-center font-semibold text-black-soft">
                  Order Summary
                </h4>
                <div className="lg:text-sm border-b-2 border-gray-200 self-center py-4 text-gray-600 flex justify-between">
                  <span>Subtotal </span>
                  <span>${calculeTotal}</span>
                </div>
                <div className="lg:text-sm border-b-2 border-gray-200 self-center py-4 text-gray-600 flex justify-between">
                  <span>Tax </span>
                  <span>{Tax}</span>
                </div>
                <div className="lg:text-sm border-b-2 border-gray-200 self-center py-4 text-gray-600 flex justify-between">
                  <span>Quantity </span>
                  <span>{totalQty}</span>
                </div>
                <div className="text-md font-semibold self-center py-4 text-black-soft flex justify-between">
                  <span>Order Total </span>
                  <span>${total}</span>
                </div>
                <button className="bg-green-400 py-2 text-white text-lg lg:text-xl font-light rounded-lg">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

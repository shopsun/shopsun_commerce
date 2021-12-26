import React, { useState, useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
// import { USER_TOKEN } from "../../src/token";
import { ADMIN_TOKEN } from "../../src/token";
import { useSelector } from "react-redux";

function Navbar() {
  const stateToken = useSelector((state) => state.handleToken);
  const token = localStorage.getItem("token");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hotReload, setHotReload] = useState(false);
  const location = useLocation();
  let history = useHistory();

  const state = useSelector((state) => state.handleCart);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white md:w-5/6 md:mx-auto rounded-xl z-10 md:mt-5 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-Poppins font-medium text-blue-pastel">
                Shopsun
              </h1>
            </div>
            <div className="hidden md:block font-quicksand text-blue-pastel">
              <ul className="flex ml-10 items-center space-x-4">
                {/* Tinggal ganti sesuai pathname Home */}
                {token === ADMIN_TOKEN && (
                  <li>
                    <button
                      className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-blue-pastel rounded-2xl hover:text-white font-bold ${
                        location.pathname === "/update"
                          ? "text-white bg-blue-pastel scale-110"
                          : ""
                      }`}
                      onClick={() => history.push("/update")}>
                      Update Stock
                    </button>
                  </li>
                )}
                {token === stateToken && (
                  <li>
                    <button
                      className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-blue-pastel rounded-2xl hover:text-white font-bold ${
                        location.pathname === "/product"
                          ? "text-white bg-blue-pastel scale-110"
                          : ""
                      }`}
                      onClick={() => history.push("/product")}>
                      Home
                    </button>
                  </li>
                )}
                &nbsp;
                {/* Tinggal ganti sesuai pathname Rekap Penjualan */}
                {token === ADMIN_TOKEN && (
                  <li>
                    <button
                      className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-blue-pastel rounded-2xl hover:text-white font-bold ${
                        location.pathname === "/rekap"
                          ? "text-white bg-blue-pastel scale-110"
                          : ""
                      }`}
                      onClick={() => history.push("/rekap")}>
                      Rekap Penjualan
                    </button>
                  </li>
                )}
                &nbsp;
                {/* Tinggal ganti sesuai pathname Login */}
                {token === stateToken || token === ADMIN_TOKEN ? (
                  <li>
                    <button
                      className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-blue-pastel rounded-2xl hover:text-white font-bold `}
                      onClick={() => {
                        localStorage.removeItem("token");
                        history.push("/");
                        setHotReload(!hotReload);
                      }}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <button
                      className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-blue-pastel rounded-2xl hover:text-white font-bold ${
                        location.pathname === "/login"
                          ? "text-white bg-blue-pastel scale-110"
                          : ""
                      }`}
                      onClick={() => {
                        history.push("/login");
                        setHotReload(!hotReload);
                      }}>
                      Login
                    </button>
                  </li>
                )}
                &nbsp;
                {/* Tinggal ganti sesuai pathname Cart */}
                {token === stateToken && (
                  <li>
                    <button
                      className={` inline-flex items-center transition-color transition-transform transform hover:scale-110 px-2 py-2 text-sm hover:bg-blue-pastel rounded-full hover:text-white font-bold`}
                      onClick={() => history.push("/cart")}>
                      <span className="relative inline-block ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {state.length === 0 ? (
                          <span></span>
                        ) : (
                          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            {state.length}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-pastel hover:font-bold  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-pastel focus:ring-white"
              onClick={handleClick}
              type="button">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <ul
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-blue-pastel">
              {/* Tinggal ganti sesuai pathname Home */}
              <li>
                <button
                  className={`hover:bg-blue-pastel hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                    location.pathname === "/product"
                      ? "text-white bg-blue-pastel"
                      : ""
                  }`}
                  onClick={() => history.push("/product")}>
                  Home
                </button>
              </li>
              &nbsp;
              {/* Tinggal ganti sesuai pathname Cart */}
              {token === stateToken && (
                <li>
                  <button
                    className={`hover:bg-blue-pastel hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                      location.pathname === "/cart"
                        ? "text-white bg-blue-pastel"
                        : ""
                    }`}
                    onClick={() => history.push("/cart")}>
                    Cart
                  </button>
                </li>
              )}
              &nbsp;
              {/* Tinggal ganti sesuai pathname Login */}
              {token === stateToken || token === ADMIN_TOKEN ? (
                <li>
                  <button
                    className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-blue-pastel rounded-2xl hover:text-white font-bold `}
                    onClick={() => {
                      localStorage.removeItem("token");
                      history.push("/");
                    }}>
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    className={`hover:bg-blue-pastel hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                      location.pathname === "/login"
                        ? "text-white bg-blue-pastel"
                        : ""
                    }`}
                    onClick={() => history.push("/login")}>
                    Login
                  </button>
                </li>
              )}
              &nbsp;
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;

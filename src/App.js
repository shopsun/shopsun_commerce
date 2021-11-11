import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import ProductsListing from "./components/Products/ProductsListing";
import ProductDetails from "./components/Products/ProductDetails";
import UpdateStock from "./components/admin/UpdateStok";
import Rekap from "./components/admin/Rekap";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <div className="w-full h-screen">
        <Navbar />
        <Switch>
          <Route exact path="/update" component={UpdateStock} />
          <Route exact path="/rekap" component={Rekap} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/product" component={ProductsListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Redirect from="*" to="/product" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsListing from "./components/Products/ProductsListing";
import ProductDetails from "./components/Products/ProductDetails";
/* list component yang belum :
1.products details
2.home
3.login
4.chart
5.admin page
*/
function App() {
  return (
    <Router>
      <div className="w-full h-screen">
        <Navbar />
        <Route exact path="/" component={ProductsListing} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Redirect from="*" to="/" />
      </div>
    </Router>
  );
}

export default App;

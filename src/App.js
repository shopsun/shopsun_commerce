import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/Navbar";
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
      </div>
    </Router>
  );
}

export default App;

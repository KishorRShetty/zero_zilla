import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import User from "./User/User";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";

import ProductById from "./ProductById/ProductById";
import Categories from "./Categories/Categories";
import Cart from "./Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Categories /> */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":category" element={<Home />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/details" element={<ProductDetails />}></Route>
          <Route path="single/:id" element={<ProductById />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

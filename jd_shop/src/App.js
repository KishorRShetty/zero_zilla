import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Cart, { CartContext } from "./Cart/Cart";
import User from "./User/User";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import { useState } from "react";
import ProductById from "./ProductById/ProductById";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CartContext.Provider value={{ count, setCount }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/single/:id" element={<ProductById />}></Route>
            <Route path="/details" element={<ProductDetails />}></Route>
          </Routes>
        </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;

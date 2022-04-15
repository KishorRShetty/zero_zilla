import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Cart, { CartContext } from "./Cart/Cart";
import User from "./User/User";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import { useContext, useState } from "react";
import ProductById from "./ProductById/ProductById";
import Categories from "./Categories/Categories";

function App() {
  // const [count, setCount] = useState(0);
  const { count, setCount } = useContext(CartContext);
  return (
    <>
      <CartContext.Provider value={{ count, setCount }}>
        <Router>
          <Header />
          <Categories />
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
      </CartContext.Provider>
    </>
  );
}

export default App;

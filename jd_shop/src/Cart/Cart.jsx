import React, { createContext, useState } from "react";
import Header from "../Header/Header";
export const CartContext = createContext();

const Cart = () => {
  const [count, setCount] = useState(0);
  return <div>Cart</div>;
};

export default Cart;

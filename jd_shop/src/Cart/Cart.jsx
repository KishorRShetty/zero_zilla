import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

const Cart = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;

export const CartState = () =>{
  return useContext(CartContext);
}
import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
function Context({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};

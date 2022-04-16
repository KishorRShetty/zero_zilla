import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cart from "./Cart/Cart";

ReactDOM.render(
  <React.StrictMode>
    <Cart>
      <App />
    </Cart>
  </React.StrictMode>,
  document.getElementById("root")
);

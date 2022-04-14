import React from "react";
import "./Loader.css";

function Loader({ size }) {
  return <div className={size ? `loader ${size}` : "loader"}></div>;
}

export default Loader;

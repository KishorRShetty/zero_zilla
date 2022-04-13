import React from "react";
import { useParams } from "react-router-dom";
import "./ProductById.css";

function ProductById() {
  const { id } = useParams();

  return (
    <>
      <br />
      <br />
      <div className="top">ProductById {id}</div>
    </>
  );
}

export default ProductById;

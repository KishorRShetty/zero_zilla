import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Cart/Cart";
import axios from "axios";
import "./ProductById.css";

function ProductById() {
  const { id } = useParams();
  const { count, setCount } = useContext(CartContext);
  const { product, setProduct } = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      console.log(`inside useEffectId${id}`);
      console.log(`https://fakestoreapi.com/products/${id}`);
      const requestProduct = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(requestProduct.data);
      console.log(requestProduct);
      return requestProduct;
    }
    fetchProduct();
  }, []);

  return (
    <>
      <br />
      <br />
      <div className="top">
        ProductById {id}
        {/* <p>{product.title}</p> */}
      </div>
    </>
  );
}

export default ProductById;

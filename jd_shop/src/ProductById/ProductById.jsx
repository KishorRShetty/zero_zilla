import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductById.css";
import Loader from "../Loader/Loader";

function ProductById() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const prodData = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      // console.log(prodData.data);
      setProduct(prodData.data);
      return prodData;
    }
    getProduct();
  }, [id]);

  return (
    <>
      <br />
      {product.length !== 0 ? (
        <div className="top wrap">
          {/* {console.log(product)} */}
          <div className="detailsCard">
            <img src={product.image} alt="Prod" style={{ width: "100%" }} />
            <h1>{product.title}</h1>
            <p className="detailsPrice">${product.price}</p>
            <p>{product.description}</p>
            <button
            //  onClick={() => setCount(count + 1)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="items">
          <Loader size={"large"} />
        </div>
      )}
    </>
  );
}

export default ProductById;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductById.css";
import Loader from "../Loader/Loader";
import { CartState } from "../Context";

function ProductById() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { cart, setCart } = CartState();

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
            {cart.some((p) => {
                  return p.id === product.id;
                }) ? (
                  <button
                    style={{ backgroundColor: "Crimson" }}
                    onClick={() => {
                      setCart(
                        cart.filter((c) => {
                          return c.id !== product.id;
                        })
                      );
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setCart([...cart, { ...product, qty: 1 }]);
                      // console.log(cart);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
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

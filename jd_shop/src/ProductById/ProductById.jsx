import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Cart/Cart";
import axios from "axios";
import "./ProductById.css";

function ProductById() {
  const { id } = useParams();
  const { count, setCount } = useContext(CartContext);
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  // fetch('https://fakestoreapi.com/products/1')
  //         .then(res=>res.json())
  //         .then(json=>setProduct(json))
  //         .then(json=>console.log(json))

  // async function fetchProduct() {
  //   console.log(`inside useEffectId${id}`);
  //   console.log(`https://fakestoreapi.com/products/${id}`);
  //   const requestProduct = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //   setProduct(requestProduct.data);
  //   console.log(requestProduct);
  //   return requestProduct;
  // }
  // fetchProduct();
  // }, []);

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
  }, []);

  return (<><br/>
  <div className="top wrap">
    {/* {console.log(product)} */}
    <div className="detailsCard">
      <img src={product.image} alt="Prod" style={{ width: "100%" }} />
      <h1>{product.title}</h1>
      <p className="detailsPrice">${product.price}</p>
      <p>{product.description}
      </p>
      <button onClick={()=>setCount(count+1)}>Add to Cart</button>
      
    </div>
  </div>
</>
  );
}

export default ProductById;

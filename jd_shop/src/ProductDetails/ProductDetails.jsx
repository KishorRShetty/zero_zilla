import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Cart/Cart";
import "./ProductDetails.css"


const ProductDetails = () => {
  const { count, setCount } = useContext(CartContext);
  const location = useLocation();
  const prodDetail = location.state.itemDetail;
  return (
    <><br/>
      <div className="top wrap">
        {console.log(prodDetail)}
        {/* {location.state.itemDetail.title} */}
        <div className="detailsCard">
          <img src={prodDetail.image} alt="Prod" style={{ width: "100%" }} />
          <h1>{prodDetail.title}</h1>
          <p className="detailsPrice">${prodDetail.price}</p>
          <p>{prodDetail.description}
          </p>
          <button onClick={()=>setCount(count+1)}>Add to Cart</button>
          
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

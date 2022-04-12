import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetails.css"

const ProductDetails = () => {
  const location = useLocation();
  const prodDetail = location.state.itemDetail;
  return (
    <>
      <div className="top wrap">
        {/* {console.log(prodDetail)} */}
        {/* {location.state.itemDetail.title} */}
        <div className="detailsCard">
          <img src={prodDetail.image} alt="Prod" style={{ width: "100%" }} />
          <h1>{prodDetail.title}</h1>
          <p className="detailsPrice">${prodDetail.price}</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

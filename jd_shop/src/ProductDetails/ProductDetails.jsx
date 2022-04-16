import { useLocation } from "react-router-dom";
import { CartState } from "../Context";
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const prodDetail = location.state.itemDetail;
  const { cart, setCart } = CartState();
  return (
    <>
      <br />
      <div className="top wrap">
        {/* {console.log(prodDetail)} */}
        {/* {location.state.itemDetail.title} */}
        <div className="detailsCard">
          <img src={prodDetail.image} alt="Prod" style={{ width: "100%" }} />
          <h1>{prodDetail.title}</h1>
          <p className="detailsPrice">${prodDetail.price}</p>
          <p>{prodDetail.description}</p>
          {cart.some((p) => {
            return p.id === prodDetail.id;
          }) ? (
            <button
              style={{ backgroundColor: "Crimson" }}
              onClick={() => {
                setCart(
                  cart.filter((c) => {
                    return c.id !== prodDetail.id;
                  })
                );
              }}
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                setCart([...cart, { ...prodDetail, qty: 1 }]);
                // console.log(cart);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

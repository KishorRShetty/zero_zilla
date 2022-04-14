import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Cart/Cart";
import Loader from "../Loader/Loader";

const Home = () => {
  const { count, setCount } = useContext(CartContext);
  const navigate = useNavigate();
  const { category } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    // console.log(category);
    const linkToUse = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`;
      setItems([]);
    async function fetchItems() {
      const requestItems = await axios.get(linkToUse);
      // console.log(requestItems.data);
      setItems(requestItems.data);
    }
    // fetchCategories();
    fetchItems();
  }, [category]);

  const toProductDetails = (itemDetail) => {
    navigate("/details", { state: { itemDetail } });
  };

  const handleAtC = () => {
    //cart logic can be implmented here. If needed
    setCount(count + 1);
  };

  return (
    <>
      {items.length !== 0 ? (
        <div className="items">
          {items.map((itm) => (
              <div className="card">
                <img
                  onClick={() => {
                    toProductDetails(itm);
                  }}
                  src={itm.image}
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <b>
                    <p className="price">${itm.price}</p>
                  </b>
                  <p className="title">{itm.title}</p>
                </div>
                <button onClick={handleAtC}>Add to Cart</button>
              </div>
          ))}
        </div>
      ) : (
        <div className="items">
          <Loader size={"large"} />
        </div>
      )}
    </>
  );
};

export default Home;

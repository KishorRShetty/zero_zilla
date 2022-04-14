import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/Cart";
import Loader from "../Loader/Loader";

const Home = () => {
  const { count, setCount } = useContext(CartContext);
  const navigate = useNavigate();

  const [category, setCategory] = useState("jewelery");
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const requestCategory = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      // console.log(requestCategory.data);
      setCategories(requestCategory.data);
      return requestCategory;
    }

    async function fetchItems() {
      const requestItems = await axios.get(
        // `https://fakestoreapi.com/products/category/${category}`
        `https://fakestoreapi.com/products`
      );
      // console.log(requestItems.data);
      setItems(requestItems.data);
    }
    fetchCategories();
    fetchItems();
  }, [category]);
  async function clickHandler(e) {
    setItems([]);
    const categoryBased = await axios.get(
      `https://fakestoreapi.com/products/category/${e.target.outerText}`
    );
    setItems(categoryBased.data);
    // setCategory(e.target.outerText);
    // console.log(e.target.outerText);
  }

  const toProductDetails = (itemDetail) => {
    navigate("/details", { state: { itemDetail } });
  };

  const handleAtC = () => {
    setCount(count + 1);
  };

  return (
    <>
      <br />
      {categories.length !== 0 ? (
        <div className="categories">
          {categories.map((cat) => (
            // <p>{cat}</p>
            <p onClick={clickHandler}>{cat}</p>
          ))}
        </div>
      ) : (
        <div className="categories top">
          <Loader size={"small"} />
        </div>
      )}

      {items.length !== 0 ? (
        <div className="items">
          {items.map((itm) => (
            <>
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
            </>
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

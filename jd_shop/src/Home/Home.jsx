import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
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
        `https://fakestoreapi.com/products/category/${category}`
      );
      // console.log(requestItems.data);
      setItems(requestItems.data);
    }
    fetchCategories();
    fetchItems();
  }, [category]);
function clickHandler(e){
setCategory(e.target.outerText);
// console.log(e.target.outerText);
}
  return (
    <div>
      <div className="categories">
        {categories.map((cat) => (
          // <p>{cat}</p>
          <p onClick={clickHandler}>{cat}</p>
        ))}
      </div>
      <div className="items">
        {items.map((itm, index) => (
          <>
            <div className="card">
              <img src={itm.image} alt="Avatar" style={{width:"100%"}} />
              <div className="container">
                <p>{itm.title}</p>
                <b><p className="price">${itm.price}</p></b>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;

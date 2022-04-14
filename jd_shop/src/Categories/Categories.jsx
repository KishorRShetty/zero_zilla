import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Categories.css";

function Categories() {
  
  // const [category, setCategory] = useState("jewelery");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const requestCategory = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      // console.log(requestCategory.data);
      setCategories(requestCategory.data);
      return requestCategory;
    }
    fetchCategories();
  },[]);

  return (
    <>
      {categories.length !== 0 ? (
        <div className="cat">
          {categories.map((cat) => (
            <p className="link"><Link to={`/${cat}`}>{cat}</Link></p>
          ))}
        </div>
      ) : (
        <div className="cat top">
          <Loader size={"small"} />
        </div>
      )}
    </>
  );
}

export default Categories;

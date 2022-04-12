import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"

const Home = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log(request.data);
      setCategory(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="categories">
        {category.map((cat) => (
          <p>{cat}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;

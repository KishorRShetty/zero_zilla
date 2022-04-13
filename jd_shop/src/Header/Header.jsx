import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { BsCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../Cart/Cart";

export default function Header() {
  const { count } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState();
  const [searchId, setSearchId] = useState();

  useEffect(() => {
    async function fetchProducts() {
      const requestProducts = await axios.get(
        "https://fakestoreapi.com/products"
      );
      // console.log(requestCategory.data);
      setProducts(requestProducts.data);
      // console.log(requestProducts.data);
      return requestProducts;
    }
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    if(e.target.value ===""){setSearch([])}
    products.map((element) => {
      if (element.title.includes(e.target.value)) {
        setSearch(element.title);
        setSearchId(element.id);
      }
      return element.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(e.target.value);
  };

  return (
    <>
      <header class="site-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="dropdown">
          <input
            type="text"
            onKeyUp={handleChange}
            class="search-input dropbtn"
            placeholder="Search"
          />
          <div className="dropdown-content">
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
            {/* <Link to={`blog/${id}`}>{title}</Link> */}
            {/* {search ? ( */}
              <Link to={`single/${searchId}`}>{search}</Link>
            {/* ) : ( */}
              {/* "No results" */}
            {/* )} */}
          </div>
        </div>
        <nav class="nav">
          {/* <Link to="cart"> */}
          <span style={{ color: "white" }}>
            <BsCartFill className="icons" />
            <div className="badge">{count}</div>
          </span>
          <Link to="user">
            <FaUserCircle className="icons" />
          </Link>
        </nav>
      </header>
    </>
  );
}

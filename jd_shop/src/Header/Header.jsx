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
    if (
      products.filter((element) => {
        // console.log(element.title);
        // console.log(element.title.includes(e.target.value));
        if (element.title.includes(e.target.value)) {
          console.log(element.title);
          setSearch(element.title);
        }
        return element.title.includes(e.target.value);
      })
    )
      console.log(e.target.value);
    console.log(handleChange());
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
            {search ? <a>{search}</a> : "No results"}
          </div>
        </div>
        <nav class="nav">
          {/* <Link to="cart"> */}
          <span style={{color:'white'}}>
            <BsCartFill className="icons" />
            {count}
          </span>
          <Link to="user">
            <FaUserCircle className="icons" />
          </Link>
        </nav>
      </header>
    </>
  );
}

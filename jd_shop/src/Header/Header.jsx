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
  const [search, setSearch] = useState([]);
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
    const searchWord = e.target.value;
    const newSearch = products.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setSearch([]);
    } else {
      setSearch(newSearch);
    }
    // console.log(e.target.value);
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
          {search.length !== 0 && (
            <div className="dropdown-content">
              {search.map((value) => {
                return <p><Link to={`single/${value.id}`}>{value.title}</Link></p>;
                // return <p>{value.title}</p>;
              })}
            </div>
          )}
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

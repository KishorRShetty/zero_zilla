import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import { BsCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header class="site-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" class="search-input" placeholder="Search" />
        <nav class="nav">
          <Link to="cart" ><BsCartFill className="icons" /></Link>
          <Link to="user" ><FaUserCircle className="icons" /></Link>
        </nav>
      </header>
    </>
  );
}

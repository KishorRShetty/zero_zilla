import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import User from "./User/User";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/user" element={<User/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

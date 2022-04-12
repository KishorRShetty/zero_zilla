import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";
import logo from "../logo.svg";

function User() {
  const [udata, setUdata] = useState({});
  useEffect(() => {
    async function fetchUser() {
      const requestUser = await axios.get("https://fakestoreapi.com/users/1");
      // console.log(requestUser.data);
      setUdata(requestUser.data);
      // console.log(requestUser.data);
      return requestUser;
    }
    fetchUser();
  }, []);
  return (
    <>
      <br />
      <div className="top">
        <div class="card">
          <img src={logo} alt="John" style={{ width: "100%" }} />
          <h1>{udata.username}</h1>
          <p class="title">{udata.phone}</p>
          <p>{udata.email}</p>
          <button>Contact</button>
        </div>
      </div>
    </>
  );
}

export default User;

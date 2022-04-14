import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../logo.svg";
import Loader from "../Loader/Loader";
import "./User.css";

function User() {
  const [udata, setUdata] = useState([]);
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
      {udata.length !== 0 ? (
        <div className="top">
          <div class="usercard">
            <img src={logo} alt="John" style={{ width: "100%" }} />
            <h1>{udata.username}</h1>
            <p class="usertitle">{udata.phone}</p>
            <p>{udata.email}</p>
            <button>Contact</button>
          </div>
        </div>
      ) : (
        <div className="top">
          <Loader size={"large"} />
        </div>
      )}
    </>
  );
}

export default User;

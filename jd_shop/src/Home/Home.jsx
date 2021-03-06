import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { CartState } from "../Context";
import Categories from "../Categories/Categories";

const Home = () => {
  const resultsPerPage = 6;
  const navigate = useNavigate();
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(resultsPerPage);
  const [total, setTotal] = useState(0);
  const [infinite, setInfinite] = useState(false);

  const { cart, setCart } = CartState();
  // console.log(CartState());

  // const { pathname } = useLocation();

  useEffect(() => {
    // console.log(pathname);

    const linkToUse = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products?limit=${limit}`;
    // `https://fakestoreapi.com/products`;
    // https://fakestoreapi.com/products?limit=5
    if (limit === resultsPerPage) {
      setItems([]);
    }
    if (linkToUse.includes(category)) {
      setItems([]);
    }
    async function fetchItems() {
      const requestItems = await axios.get(linkToUse);
      // console.log(requestItems.data);
      const totalItems = await axios.get(`https://fakestoreapi.com/products`);
      setTotal(totalItems.data.length);
      setItems([...requestItems.data]);
      setInfinite(false);
    }
    // fetchCategories();
    fetchItems();
  }, [category, limit]);

  const debounce = (func, delay) => {
    let timer;

    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const infiniteScroll = function () {
    // const inner = window.innerHeight;
    // const scroll = document.documentElement.scrollTop;
    // const offset = document.documentElement.offsetHeight;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // console.log(`${inner + scroll} = ${offset}`);

      //uncoment the below to see the debounce effect in the console
      // console.log(`Before Limit: ${limit} Total: ${total}`);
      if (limit <= total) {
        setLimit(limit + resultsPerPage);
        setInfinite(true);
        // console.log(`AFter1 Limit: ${limit} Total: ${total}`);
      } else {
        setLimit(total);
        setInfinite(false);
        // console.log(`AFter2 Limit: ${limit} Total: ${total}`);
      }
    }
  };

  if (infinite === false && limit !== total) {
    window.onscroll = debounce(infiniteScroll, 1000);
  }

  const toProductDetails = (itemDetail) => {
    navigate("/details", { state: { itemDetail } });
  };

  return (
    <>
      {items.length !== 0 ? (
        <>
          <Categories />
          <div className="items">
            {items.map((itm) => (
              <div className="card" key={itm.id}>
                <img
                  onClick={() => {
                    toProductDetails(itm);
                  }}
                  src={itm.image}
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <b>
                    <p className="price">${itm.price}</p>
                  </b>
                  <p className="title">{itm.title}</p>
                </div>
                {cart.some((p) => {
                  return p.id === itm.id;
                }) ? (
                  <button
                    style={{ backgroundColor: "Crimson" }}
                    onClick={() => {
                      setCart(
                        cart.filter((c) => {
                          return c.id !== itm.id;
                        })
                      );
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setCart([...cart, { ...itm, qty: 1 }]);
                      // console.log(cart);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="items">
          <Loader size={"large"} />
        </div>
      )}
      {infinite === true && (
        <div className="infinite">
          <Loader size={"small"} />
        </div>
      )}
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "./Cart.css";
import { CartState } from "../Context";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";

const Cart = () => {
  const { cart, setCart } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        return acc + Number(curr.price)*curr.qty;
      }, 0)
    );
  }, [cart]);

  return (
    <>
      <div className="cart">
        {cart.length === 0 ? (
          <h3>No items found</h3>
        ) : (
          <>
            <div className="row">
              {cart.map((itm) => {
                return (
                  // <h4>{itm.id}</h4>

                  <div className="column">
                    <div className="cartcard">
                      <img className="rounImg" src={itm.image} alt="Avatar" />
                      <p>Quantity: {itm.qty}</p>
                      <p>${(itm.qty * itm.price).toFixed(2)}</p>
                      <p className="title">{itm.title}</p>
                      <span
                        className="remove"
                        onClick={() => {
                          setCart(
                            cart.filter((p) => {
                              return p.id === itm.id ? p.qty -= 1 : p.qty;
                            })
                          );
                        }}
                      >
                        <IoRemoveCircleOutline />
                      </span>
                      <span
                        className="delete"
                        onClick={() => {
                          setCart(
                            cart.filter((c) => {
                              return c.id !== itm.id;
                            })
                          );
                        }}
                      >
                        <MdDelete />
                      </span>
                      <span
                        className="add"
                        onClick={() => {
                          setCart(
                            cart.filter((p) => {
                              return p.id === itm.id ? p.qty += 1 : p.qty;
                            })
                          );
                        }}
                      >
                        <IoAddCircleOutline />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      {cart.length !== 0 && <div className="sum">Total Price: ${Number(total).toFixed(2)}</div>}
    </>
  );
};

export default Cart;

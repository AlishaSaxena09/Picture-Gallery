import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
export default function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "fa-solid fa-truck" : "fa-solid fa-cart-shopping";

  return (
    <header className="flex justify-between p-4 shadow-md align-center ">
      <Link to="/">
        <h1 className="text-xl font-extrabold uppercase ">Pic Some</h1>
      </Link>
      <Link to="/cart">
        <span>
          <i className={`text-lg  ${cartClassName}`}></i>
        </span>
      </Link>
    </header>
  );
}

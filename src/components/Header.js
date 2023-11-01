import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = UseOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items items-center">
        <ul className="items-center">
          <li>
            Online Status: <span>{onlineStatus ? "green" : "red"}</span>
          </li>
          <li className=" text-red-600 ">
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <Link to="/cart">
            {" "}
            <li className="px-4 text-xl font-bold">
              Cart -({cartItems.length} items)
            </li>
          </Link>

          <button className="login" onClick={handleClick}>
            {btnName}
          </button>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

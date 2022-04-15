import "../styles/Header.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="header-container">
      <ul className="header-ul">
        <Link to="/">
          <li>
            <i className="fa-brands fa-apple fa-xl"></i>
          </li>
        </Link>

        <li>Store</li>

        <Link to="/macpage">
          <li>Mac</li>
        </Link>
        <Link to="/ipad">
          <li>iPad</li>
        </Link>

        <Link to="/iphone">
          <li>iPhone</li>
        </Link>

        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Only on Apple</li>
        <li>Accessories</li>
        <li>Support</li>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>

        <li>
          <ShoppingBagIcon />
        </li>
      </ul>

      <nav className="navbar-for-mobile">
        <div className="barIcon" onClick={() => setClick(!click)}>
          {click ? (
            <i className="fa-solid fa-xmark fa-xl" />
          ) : (
            <i className="fa-solid fa-bars " />
          )}
        </div>
        <Link to="/">
          <i className="fa-brands fa-apple fa-xl"></i>
        </Link>
        <ShoppingBagIcon />
      </nav>

      <ul onClick={() => setClick(!click)} className="ul-for-mobile">
        {click && (
          <>
            <li>Store</li>

            <Link to="/macpage">
              <li>Mac</li>
            </Link>
            <Link to="/ipad">
              <li>iPad</li>
            </Link>

            <Link to="/iphone">
              <li>iPhone</li>
            </Link>

            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Only on Apple</li>
            <li>Accessories</li>
            <li>Support</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;

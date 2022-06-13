import "../styles/Header.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header-container">
      <ul className="header-ul">
        <Link to="/">
          <li>
            <i className="fa-brands fa-apple fa-xl"></i>
          </li>
        </Link>

        <Link to="/store">
          <li>Store</li>
        </Link>

        <Link to="/macpage">
          <li>Mac</li>
        </Link>

        <Link to="/ipad">
          <li>iPad</li>
        </Link>

        <Link to="/iphone">
          <li>iPhone</li>
        </Link>

        <Link to="/watch">
          <li>Watch</li>
        </Link>

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

      {/* ********This Section is for mobile screen******* */}
      <nav className={click ? "navbar-for-mobile-active" : "navbar-for-mobile"}>
        <div className="barIcon" onClick={handleClick}>
          {click ? (
            <i className="fa-solid fa-xmark fa-xl" />
          ) : (
            <i className="fa-solid fa-bars " />
          )}
        </div>

        <Link to="/">
          <i className="fa-brands fa-apple fa-xl"></i>
        </Link>

        <ShoppingBagIcon
          className={click ? "mobile-cart" : ""}
          onClick={handleClick}
        />
      </nav>

      {click && (
        <ul onClick={handleClick} className="ul-for-mobile">
          <div className="mobile-search-screen">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search apple.com" />
          </div>

          <Link to="/store">
            <li>Store</li>
          </Link>

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
          <li className="mobile-screen-support">Support</li>
        </ul>
      )}
    </div>
  );
};

export default Header;

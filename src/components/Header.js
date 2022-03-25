import "../styles/Header.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Header = () => {
  return (
    <div className="header-container">
      <ul className="header-ul">
        <li>
          <i className="fa-brands fa-apple fa-xl"></i>
        </li>
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
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
    </div>
  );
};

export default Header;

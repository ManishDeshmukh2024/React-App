import { logo_url } from "../../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("Header Render");
  useEffect(() => {
    console.log("useEffect Called");
  }, []);

  return (
    <div id="header" className="header">
      <img className="header-logo" src={logo_url}></img>
      <ul className="header-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <a href="/Contact">Contact Us</a>
        </li>
        <li>List</li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;

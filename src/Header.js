
import {logo_url} from "./../utils/constants";
import { useState } from "react";


const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    return (
      <div id="header" className="header">
        <img
          className="header-logo"
          src={logo_url}
        ></img>
        <ul className="header-ul">
          <li>Menu</li>
          <li>Action</li>
          <li>List</li>
          <li>Cart</li>
          <button className="login-btn" 
                onClick={ () => {
                    btnName === "Login" ?  setBtnName("Logout") :setBtnName("Login") 
                }
          }>
            {btnName}
            </button>
        </ul>
      </div>
    );
  };

  
  export default Header;
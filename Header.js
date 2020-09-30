import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="/images/amazon_PNG11.png" />
      </Link>

      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="option-2">Hello {user?.email}</span>
            <span className="option-1">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="option-2">Returns</span>
          <span className="option-1">& Order</span>
        </div>

        <div className="header_option">
          <span className="option-2">Your</span>
          <span className="option-1">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="basketCount option-1">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

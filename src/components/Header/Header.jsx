import React from "react";
import "../Header/Header.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ProfileIcon from "@material-ui/icons/PersonOutline";
import { Divider } from "@material-ui/core";
import book from "./education.svg";
import { useHistory } from "react-router";

export function Header(props) {
  const history = useHistory();

  const onChange = (e) => {
    props.dispatch({ type: "Search", searchData: e.target.value });
  };
  const handleLogo = (e) => {
    history.push("/home");
  };
  const handleClickCart = (e) => {
    history.push("/cart");
  };
  const handleClickWishList = (e) => {
    history.push("/wishlist");
  };

  return (
    <div className='first-con'>
    <div className="top-header">
      <img src={book} alt="book" className="book-icon" onClick={handleLogo} />
      <p className="header-book-tag">Bookstore</p>
      <div className="search-div">
        <SearchIcon fontSize="small" />
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChange}
        />
      </div>
      <div className="header-icons">
        <Divider orientation="vertical" flexItem />
        <div className="profile-icon">
          <ProfileIcon />
          <p className="header-tag">Profile</p>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="cart-icon">
          <CartIcon onClick={handleClickCart} />
          <p className="header-tag">Cart</p>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="cart-icon">
          <FavoriteIcon onClick={handleClickWishList} />
          <p className="header-tag">Wishlist</p>
        </div>
        <Divider orientation="vertical" flexItem />
      </div>
    </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    searchData: state.searchBarReducer.searchData,
  };
}
export default connect(mapStateToProps)(Header);

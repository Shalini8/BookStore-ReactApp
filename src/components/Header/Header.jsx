import React from "react";
import "../Header/Header.css";
import { connect } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ProfileIcon from "@material-ui/icons/PersonOutline";
import { Divider } from "@material-ui/core";
import book from "./education.svg";
import { useHistory } from "react-router";

function Header(props) {
  const history = useHistory();

  const onChange = (e) => {
    props.dispatch({ type: "Search", searchData: e.target.value });
  };
  const handleLogo = (e) => {
    history.push("/home");
  };

  return (
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
          <CartIcon />
          <p className="header-tag">Cart</p>
        </div>
        <Divider orientation="vertical" flexItem />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return {
    searchData: state.searchBarReducer.searchData,
  };
}
export default connect(mapStateToProps)(Header);

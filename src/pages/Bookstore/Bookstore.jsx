import React from "react";
import Button from "@material-ui/core/Button";
import Login from "../Login/Login";
import Signin from "../Signin/Signin";
import "../Bookstore/Bookstore.css";
import basket from "../../assets/basket.png";

export default function Bookstore() {
  return (
    <div className="mainContainer">
      <div className="container">
          <div className='image'>
        <img alt="Google image" src={basket} className='basket' />
        <h4>ONLINE BOOK SHOPPING</h4>
        </div>
        <div className="formContainer">
        <div className="ls-btns">
            <Button >
              <h3>LOGIN</h3>
            </Button>
            <Button>
              <h3>SIGNUP</h3>
            </Button>
          </div>
          <div className='lsContainer'>
          <Login/>
          {/* <Signin/> */}
          </div>
        </div>
       
      </div>
    </div>
  );
}

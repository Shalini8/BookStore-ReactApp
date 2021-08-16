import React from "react";
import Button from "@material-ui/core/Button";
import Login from "../Login/Login";
import Signin from "../Signin/Signin";
import "../Bookstore/Bookstore.css";
import basket from "../../assets/basket.png";

export default function Bookstore() {
  let display;

  const [click, setClick] = React.useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  let color1 = !click ? "#000" : "#878787";
  let color2 = !click ? "#878787" : "#000";

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="image">
          <img alt="Google image" src={basket} className="basket" />
          <h4>ONLINE BOOK SHOPPING</h4>
        </div>
        <div className="formContainer">
          <div className="ls-btns">
            <Button className='loginBtn' onClick={handleClick} style={{ color: color1 }}>
              <h3>LOGIN</h3>
            </Button>
            <Button className='SigninBtn' onClick={handleClick} style={{ color: color2 }}>
              <h3>SIGNUP</h3>
            </Button>
          </div>
          <div className="lsContainer">
            {(display = click ? <Login /> : <Signin />)}
          </div>
        </div>
      </div>
    </div>
  );
}

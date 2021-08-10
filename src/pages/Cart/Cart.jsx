import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import Header from "../../components/Header/Header";
import "../Cart/Cart.css";
import bookImage from "./bookImage.png";

import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const service = new UserService();

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [opencustDetails, setOpenCustDetails] = useState(true);
  const [openOrderSum, setOpenOrderSum] = useState(true);

  const handleClick = () => {
    setOpenCustDetails(false);
  };
  const handleClick1 = () => {
    setOpenOrderSum(false);
  };

  const getCartItems = () => {
    service
      .getFromCart()
      .then((res) => {
        console.log(res);
        let data = res.data.result;
        setCart(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="header1-text1-div">
          <p className="header-text1">Home/</p>
          <h6 className="header-tag2">My Cart</h6>
        </div>
        <div className="main-container">
          <div className="cart-container">
            <p className="mycart-tag">My Cart(1)</p>
            <div className="book-image2">
              <img className="image2" src={bookImage} alt="book" />
              <div className="details">
                <h3>Title</h3>
                <p>by Author</p>
                <h4>Rs 1000</h4>
              </div>
            </div>
            <div className="place-order">
              <Button
                style={{
                  backgroundColor: "#3371b5",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "7px 30px",
                }}
                onClick={handleClick}
              >
                Place order
              </Button>
            </div>
          </div>
          {opencustDetails ? (
            <div className="addDetails-container">
              <p className="header-tag">Address Details</p>
            </div>
          ) : (
            <div className="customer-details">
              <div className="cust-tag">
                <p className="head">Customer Details :</p>
              </div>
              <div className="name-mobile">
                <TextField
                  name="fName"
                  label="First Name"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  name="fName"
                  label="Mobile Number"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="address">
                <h5 className="work-tag">1.Work</h5>
                <TextareaAutosize
                  placeholder="Address"
                  style={{
                    width: "100%",
                    height: "65px",
                    resize: "none",
                    fontFamily: "sans-serif",
                  }}
                  variant="outlined"
                />
              </div>
              <div className="name-mobile">
                <TextField
                  name="city"
                  label="city or state"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  name="state"
                  label="State"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="radioBtn">
                <FormControl component="fieldset">
                  <h4 className="type">Type:</h4>
                  <RadioGroup
                    aria-label="type"
                    name="type"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <FormControlLabel
                      value="home"
                      control={<Radio />}
                      label="Home"
                    />
                    <FormControlLabel
                      value="work"
                      control={<Radio />}
                      label="Work"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="place-order">
                <Button
                  style={{
                    backgroundColor: "#3371b5",
                    color: "#fff",
                    borderRadius: "3px",
                    padding: "7px 20px",
                  }}
                  onClick={handleClick1}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {openOrderSum ? (
            <div className="orderSum-container">
              <p className="header-tag">Order summary</p>
            </div>
          ) : (
            <div className="cart-container">
              <p className="mycart-tag">Order Summary</p>
              <div className="book-image2">
                <img className="image2" src={bookImage} alt="book" />
                <div className="details">
                  <h3>Title</h3>
                  <p>by Author</p>
                  <h4>Rs 1000</h4>
                </div>
              </div>
              <div className="place-order">
                <Button
                  style={{
                    backgroundColor: "#3371b5",
                    color: "#fff",
                    borderRadius: "3px",
                    padding: "7px 30px",
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

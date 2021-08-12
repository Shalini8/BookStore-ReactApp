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

const service = new UserService();

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [opencustDetails, setOpenCustDetails] = useState(true);
  const [openOrderSum, setOpenOrderSum] = useState(true);
  const [fName, setfName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [type, setType] = React.useState("");
  const [area, setArea] = React.useState("");

  const [fNameError, setfNameError] = React.useState("false");
  const [mobileError, setmobileError] = React.useState("false");
  const [cityError, setCityError] = React.useState("false");
  const [stateError, setStateError] = React.useState("false");

  const handlefName = (e) => {
    setfName(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleRadio = (e) => {
    setType(e.target.value);
  };

  const handleClick = () => {
    setOpenCustDetails(false);
  };
  const handleArea = (e) => {
    setArea(e.target.value);
  };

  const validation = () => {
    let isError = false;
    if (fName === "") {
      setfNameError(false);
    } else {
      setfNameError(true);
    }
    if (mobile === "") {
      setmobileError(false);
    } else {
      setmobileError(true);
    }
    if (city === "") {
      setCityError(false);
    } else {
      setCityError(true);
    }
    if (state === "") {
      setStateError(false);
    } else {
      setStateError(true);
    }

    isError = fNameError || stateError || cityError || mobileError;
    return isError;
  };
  const handleContinue = (e) => {
    e.preventDefault();
    var isValid = validation();
    if (!isValid) {
      console.log("custfail");
      setOpenOrderSum(true);
    } else {
        console.log("details" , type,area,city,state);
      let data = {
        addressType: type,
        fullAddress: area,
        city: city,
        state: state,
      };
      service
        .customerDetails(data)
        .then((res) => {
          console.log(res);
          setOpenOrderSum(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getCartItems = () => {
    service
      .getFromCart()
      .then((res) => {
        console.log(res);
        setCart(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function incrementValue(book) {
    let value = book.quantityToBuy;
    if (value < 10) {
      value = value + 1;
      console.log(value);
    }
    let data = {
      quantityToBuy: value,
    };
    service
      .cartitemQuantity(book._id, data)
      .then((res) => {
        console.log("on increasing", res);
        getCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function decrementValue(book) {
    let value = book.quantityToBuy;
    if (value > 1) {
      value = value - 1;
    }
    let data = {
      quantityToBuy: value,
    };
    service
      .cartitemQuantity(book._id, data)
      .then((res) => {
        console.log("on decreasing", res);
        getCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            {cart.map((book, index) => (
              <div key={index} className="book-image2">
                <img className="image2" src={bookImage} alt="book" />
                <div className="details-cart">
                  <h3 className="head-tagname">{book.product_id.bookName}</h3>
                  <p className="head-tag-para">by {book.product_id.author}</p>
                  <h5 className="head-tag">Rs {book.product_id.price}</h5>
                  <div className="container1">
                    <input
                      type="button"
                      onClick={() => decrementValue(book)}
                      defaultValue="-"
                    />
                    <input
                      type="text"
                      defaultValue={book.quantityToBuy}
                      size="1"
                    />
                    <input
                      type="button"
                      onClick={() => incrementValue(book)}
                      defaultValue="+"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="place-order">
              <Button
                style={{
                  backgroundColor: "#3371b5",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "7px 30px",
                  marginBottom: "10px",
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
              <div className="form">
                <div className="cust-tag">
                  <p className="head">Customer Details :</p>
                </div>
                <div className="name-mobile">
                  <TextField
                    className="sec-textfield"
                    name="fName"
                    error={!fNameError}
                    helperText={!fNameError ? "Invalid name" : ""}
                    label="First Name"
                    variant="outlined"
                    size="small"
                    onChange={handlefName}
                  />
                  <TextField
                    className="sec-textfield"
                    error={!mobileError}
                    helperText={!mobileError ? "Invalid number" : ""}
                    name="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    onChange={handleMobile}
                  />
                </div>
                <div className="address">
                  <h5 className="work-tag">1.Work</h5>
                  <TextareaAutosize
                    name="area"
                    onChange={handleArea}
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
                    className="sec-textfield"
                    error={!cityError}
                    helperText={!cityError ? "Invalid city" : ""}
                    name="city"
                    label="city / town"
                    variant="outlined"
                    size="small"
                    onChange={handleCity}
                  />
                  <TextField
                    onChange={handleState}
                    className="sec-textfield"
                    name="state"
                    error={!stateError}
                    helperText={!stateError ? "Invalid stateName" : ""}
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
                      onChange={handleRadio}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                    >
                      <FormControlLabel
                        value="Home"
                        control={<Radio />}
                        label="Home"
                      />
                      <FormControlLabel
                        value="Office"
                        control={<Radio />}
                        label="Work"
                      />
                      <FormControlLabel
                        value="Other"
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
                      marginTop: "10px",
                      padding: "7px 30px",
                    }}
                    onClick={handleContinue}
                  >
                    Continue
                  </Button>
                </div>
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
              {cart.map((book, index) => (
                <div key={index} className="book-image2">
                  <img className="image2" src={bookImage} alt="book" />
                  <div className="details-cart">
                    <h3 className="head-tagname">{book.product_id.bookName}</h3>
                    <p className="head-tag-para">by {book.product_id.author}</p>
                    <h5 className="head-tag">Rs {book.product_id.price}</h5>
                  </div>
                </div>
              ))}
              <div className="place-order">
                <Button
                  style={{
                    backgroundColor: "#3371b5",
                    color: "#fff",
                    borderRadius: "3px",
                    padding: "7px 30px",
                    marginBottom: "10px",
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

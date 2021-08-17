import React from "react";
import "../../components/OrderPlaced/OrderPlaced.css";
import { Button } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import orderPlace1 from "../OrderPlaced/orderPlace1.png";
import orderPlace2 from "../OrderPlaced/orderPlace2.png";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function OrderPlaced() {
  const history = useHistory();

  const handleContinueshop = () => {
    history.push("/home");
  };

  return (
    <div>
      <Header />
      <div className="orderplaced-container">
        <img src={orderPlace1} alt="" />
        <h1 className="order-head">Order Placed Successfully</h1>
        <img src={orderPlace2} alt="" />
        <p className="order-para">
          hurray!!! your order is confirmed <br></br>the order id is #123456
          save the order id for<br></br> further communication..
        </p>
        <div className="order-details">
          <div className="order-detail1">
            <h6 className="order-tag">Email</h6>
            <h6 className="order-tag">Contact Us</h6>
            <h6 className="order-tag">Address</h6>
          </div>
          <div className="order-detail2">
            <p className="orderDetails-tag">shalu8mar@gmail.com</p>
            <Divider orientation="vertical" flexItem />
            <p className="orderDetails-tag">9329747539</p>
            <Divider orientation="vertical" flexItem />
            <p className="orderDetails-tag">Hno276 nayapara ASna</p>
          </div>
        </div>
        <Button
         className='continue'
          style={{
            backgroundColor: "#3371b5",
            color: "#fff",
            borderRadius: "3px",
            padding: "7px",
            marginTop: "30px",
          }}
          onClick={handleContinueshop}
        >
          Continue Shopping
        </Button>
      </div>
      <Footer />
    </div>
  );
}

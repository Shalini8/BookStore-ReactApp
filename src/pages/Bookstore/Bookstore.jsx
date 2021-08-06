import React from "react";
import "../Bookstore/Bookstore.css";
import basket from "../../assets/basket.png";
// import { basket } from 'src\assets\basket.png';

export default function Bookstore() {
  return (
    <div className="container">
      <div className="imageContainer">
          <div className='image'>
        <img alt="Google image" src={basket} className='basket' />
        </div>
      </div>
    </div>
  );
}

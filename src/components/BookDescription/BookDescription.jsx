import React from "react";
import "../BookDescription/BookDescription.css";
import Header from "../Header/Header";
import StarIcon from "@material-ui/icons/Star";

import bookImage from "../DisplayBooks/bookImage.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {Divider} from "@material-ui/core";


export default function BookDescription() {
  return (
    <div>
      <Header />
      <div className="container1">
        <div className="part1">
          <div className="image-container">
            <img className="image2" src={bookImage} alt="book"  />
          </div>
          <div className="buttons">
            <div className="addbag">Add To Bag</div>
            <div className="wish">
              Wishlist
              <FavoriteIcon style={{ fontSize: "small" }} />
            </div>
          </div>
        </div>
        <div className="part2">
          <h1>Title</h1>
          <p>by author</p>
          <div className="green-btn1">
            4.5
            <StarIcon style={{ fontSize: "small" }} />
          </div>
          <h1>Rs 1500</h1>
          <Divider />
          <h3>Book Details</h3>
          <p className='details'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio vero quam itaque totam molestias. Excepturi rerum reiciendis ullam quidem assumenda, ut obcaecati optio repellat recusandae atque consequatur quae eos!
          </p>
          <Divider/>

        </div>
      </div>
    </div>
  );
}

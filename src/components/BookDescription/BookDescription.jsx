import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../BookDescription/BookDescription.css";
import Header from "../Header/Header";
import StarIcon from "@material-ui/icons/Star";

import bookImage from "../DisplayBooks/bookImage.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Divider } from "@material-ui/core";
import UserService from "../../services/UserService";
const service = new UserService();

function BookDescription(props) {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    service
      .getBooks()
      .then((res) => {
        let data = res.data.result;
        let reqBook = data.filter((book) => book.bookName === props.bookData);
        setBooks(reqBook[0]);
        console.log("get1Book", reqBook[0])
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);

 const addToCart = (productid) => {
   console.log("here")
    service
      .addToCart(productid)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addToWishList = (productid) => {
    service
      .addToWishList(productid)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="container1">
        <div className="part1">
          <div className="image-container">
            <img className="image3" src={bookImage} alt="book" />
          </div>
          <div className="buttons">
            <div className="addbag"onClick={() => addToCart(books._id)}>
              Add To Bag
            </div>
            <div className="wish" onClick={() => addToWishList(books._id)}>
              Wishlist
              <FavoriteIcon style={{ fontSize: "small" }} />
            </div>
          </div>
        </div>
        <div className="part2">
          <h1>{books.bookName}</h1>
          <p>by {books.author}</p>
          <div className="green-btn1">
            4.5
            <StarIcon style={{ fontSize: "small" }} />
          </div>
          <h1>Rs {books.price}</h1>
          <Divider />
          <h3>Book Details</h3>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio
            vero quam itaque totam molestias. Excepturi rerum reiciendis ullam
            quidem assumenda, ut obcaecati optio repellat recusandae atque
            consequatur quae eos!
          </p>
          <Divider />
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);

  return {
    searchData: state.searchBarReducer.searchData,
    bookData: state.bookDesReducer.bookData,
  };
}
export default connect(mapStateToProps)(BookDescription);

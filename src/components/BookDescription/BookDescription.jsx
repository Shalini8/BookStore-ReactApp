import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../BookDescription/BookDescription.css";
import Header from "../Header/Header";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router";
import bookImage from "../DisplayBooks/bookImage.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Divider } from "@material-ui/core";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIconn from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import UserService from "../../services/UserService";
import Footer from "../Footer/Footer";
const service = new UserService();

function BookDescription(props) {
  const [books, setBooks] = useState([]);
  const history = useHistory();

  const getBooks = () => {
    service
      .getBooks()
      .then((res) => {
        let data = res.data.result;
        let reqBook = data.filter((book) => book.bookName === props.bookData);
        setBooks(reqBook[0]);
        console.log("get1Book", reqBook[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);

  const addToCart = (productid) => {
    console.log("here");
    service
      .addToCart(productid)
      .then((res) => {
        console.log(res);
        history.push("/cart");
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
        history.push("/wishlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="container2">
        <div className="part1">
          <div className="image-container">
            <img className="image3" src={bookImage} alt="book" />
          </div>
          <div className="buttons">
            <div className="addbag" onClick={() => addToCart(books._id)}>
              Add To Bag
            </div>
            <div className="wish" onClick={() => addToWishList(books._id)}>
              Wishlist
              <FavoriteIcon style={{ fontSize: "small" }} />
            </div>
          </div>
        </div>

        <div className="part2">
          <h1 className="des-head">{books.bookName}</h1>

          <p className="des-para">by {books.author}</p>
          <div className="green-btn1">
            4.5
            <StarIcon style={{ fontSize: "small" }} />
          </div>
          <h1 className="des-price">Rs. {books.price}</h1>
          <div className="desc-bookdetails">
            <Divider />
            <h3 className="des-Bookhead">* Book Details</h3>
            <p className="des-Bookpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              odio vero quam itaque totam molestias. Excepturi rerum reiciendis
              ullam quidem assumenda, ut obcaecati optio repellat recusandae
              atque consequatur quae eos! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis quam aspernatur doloremque iure minus
              error, at est, saepe doloribus labore exercitationem distinctio
              voluptates sed iusto! Assumenda tenetur voluptates rem .
            </p>
            <Divider />
          </div>
          <h5 className="feedback-tag">Customer Feedback</h5>
          <div className="custDetails-container">
            <p className="overall">Overall Rating</p>
            <span>
              <StarOutlineIcon />
              <StarOutlineIcon className="star-icon" />
              <StarOutlineIcon className="star-icon" />
              <StarOutlineIcon className="star-icon" />
              <StarOutlineIcon className="star-icon" />
            </span>
            <div className="views">
              <h6 className="views-tag">Write your review</h6>
            </div>
            <div className="submit">
              <Button
                style={{
                  backgroundColor: "#3371b5",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "2px",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="review">
            <Avatar style={{ width: "7px", height: "7px", padding: "13px" }}>
              SP
            </Avatar>
            <div className="review-person">
              <h6 className="feedbck-name">Shalini Pandey</h6>
              <span>
                <StarIconn className="clr-star" />
                <StarIconn className="clr-star" />
                <StarIconn className="clr-star" />

                <StarOutlineIcon />
                <StarOutlineIcon />
              </span>
              <p className="des-Bookpara">
                Great Job!! ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum natus fuga maxime, aperiam ducimus pariatur quo iusto
                assumenda! Explicabo eius debitis hic quidem tempore
                perspiciatis obcaecati quam quibusdam adipisci porro! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                asperiores, sed culpa ab earum nemo rem. Nobis provident aut
                eius ex iure dolor obcaecati veritatis, eos facere asperiores,
                nesciunt iusto?
              </p>
            </div>
          </div>
          <div className="review">
            <div>
              <Avatar style={{ width: "7px", height: "7px", padding: "13px" }}>
                AO
              </Avatar>
            </div>
            <div className="review-person">
              <h6 className="feedbck-name">Aanya Oberoi</h6>
              <span>
                <StarIconn className="clr-star" />
                <StarIconn className="clr-star" />
                <StarIconn className="clr-star" />
                <StarIconn className="clr-star" />
                <StarOutlineIcon />
              </span>
              <p className="des-Bookpara">
                Great Job!! ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum natus fuga maxime, aperiam ducimus pariatur quo iusto
                assumenda! Explicabo eius debitis hic quidem tempore
                perspiciatis obcaecati quam quibusdam adipisci porro! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
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

import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import bookImage from ".././Cart/bookImage.png";
import DeleteIcon from "@material-ui/icons/Delete";
import "../WishList/WishList.css";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router";

const service = new UserService();

export default function WishList() {
  const [wishList, setwishList] = useState([]);
  const history = useHistory();

  const getWishlistItems = () => {
    service
      .getFromWishList()
      .then((res) => {
        console.log(res);
        setwishList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getWishlistItems();
  }, []);

  const addToCart = (productid) => {
    console.log("here");
    service
      .addToCart(productid)
      .then((res) => {
        console.log(res);
        handleRemove(productid);
        history.push("/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRemove = (id) => {
    service
      .removeFromWishlist(id)
      .then((res) => {
        console.log("remove wishitem",res)
        getWishlistItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />

      <div className="header1-text1-div">
        <p className="header-text1">Home/</p>
        <h6 className="header-tag2">My Wishlist</h6>
      </div>
      <div className="wish-container">
        <div className="wishlistitem-container">
          <h3 className="wish-head">My WishList({wishList.length})</h3>
          {wishList.map((book, index) => (
            <div key={index} className="cart-image2">
              <div className="wishimg-details">
                <img className="image2" src={bookImage} alt="book" />
                <div className="details-cart">
                  <h3 className="head-tagname">{book.product_id.bookName}</h3>
                  <p className="head-tag-para">by {book.product_id.author}</p>
                  <h5 className="head-tag">Rs {book.product_id.price}</h5>
                </div>
              </div>
              <div className="add-del">
                <div
                  className="addbag1"
                  onClick={() => addToCart(book.product_id._id)}
                >
                  Add To Bag
                </div>
                <DeleteIcon
                  className="del-icon"
                  style={{ size: "small", color: "#ccc" }}
                  onClick={() => handleRemove(book.product_id._id)}
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, CardContent } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import bookImage from "./bookImage.png";
import "../DisplayBooks/DisplayBooks.css";
import { useHistory } from "react-router";
import bookDesReducer from './../../reducers/BookDesReducer';

function DisplayBooks(props) {
  const [booksList, setBooksList] = useState(props.books);

  const history = useHistory();

  const handleBookDes = (e) => {
    props.dispatch({ type: "BookDesc", bookData: e.target.id });
    history.push("/description");
  };

  useEffect(() => {
    let filteredBooks = props.books;
    if (props.searchData) {
      filteredBooks = props.books.filter((book) =>
        book.bookName.toLowerCase().includes(props.searchData.toLowerCase())
      );
      setBooksList(filteredBooks);
      console.log(filteredBooks);
    } else {
      setBooksList(props.books);
    }
  }, [props]);

  return (
    <div>
      <div className="display-books-header">
        <div className="header-text-div">
          <h5 className="header-text1">Books</h5>
          <p className="header-tag11">(128 items)</p>
        </div>

        <select name="sortBy">
          <option>Sort by relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className="books-container">
        {booksList.map((book, index) => (
          <div key={index}>
            <div className="one-book-container">
              <Card
                style={{
                  border: "1px solid #E2E2E2",
                  boxShadow: "none",
                  borderRadius: "6px",
                }}
              >
                <CardContent style={{ padding: "0" }}>
                  <div className="book-image" 
                      >
                    <img
                      className="image1"
                      src={bookImage}
                      alt="book"
                      id={book.bookName}
                      onClick={handleBookDes}
                    />
                  </div>
                  <div className="book-div">
                    <h3 className="book-name">{book.bookName}</h3>
                    <p className="book-author">by {book.author}</p>
                    <div className="green-btn">
                      4.5
                      <StarIcon style={{ fontSize: "small" }} />
                    </div>
                    <h3 className="book-price">Rs. {book.price}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    searchData: state.searchBarReducer.searchData,
    bookData: state.bookDesReducer.bookData
  };
}
export default connect(mapStateToProps)(DisplayBooks);

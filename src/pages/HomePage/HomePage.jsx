import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DisplayBooks from "../../components/DisplayBooks/DisplayBooks";
import UserService from "../../services/UserService";
const service = new UserService();

export default function HomePage() {

  const [books, setBooks] = useState([]);

  const getBooks = () => {
    service
      .getBooks()
      .then((res) => {
        setBooks(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooks();
  },[]);

  return (
    <div>
      <Header />
      <DisplayBooks books={books}   />
    </div>
  );
}

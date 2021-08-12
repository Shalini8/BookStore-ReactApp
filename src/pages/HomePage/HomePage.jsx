import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DisplayBooks from "../../components/DisplayBooks/DisplayBooks";
import UserService from "../../services/UserService";
import Pagination from "../../components/Pagination/Pagination";

const service = new UserService();

export default function HomePage() {

  const [books, setBooks] = useState([]);
  const [count, setCount] = useState();

  const receiveInputPage = (data)=>{
    console.log(data);
  }
  const getBooks = () => {
    service
      .getBooks()
      .then((res) => {
        setBooks(res.data.result);
        console.log("this is length",res.data.result.length)
        setCount(res.data.result.length)
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
      <DisplayBooks books={books}  />
      <Pagination pageCount={count} listenToPage={receiveInputPage}/>
    </div>
  );
}

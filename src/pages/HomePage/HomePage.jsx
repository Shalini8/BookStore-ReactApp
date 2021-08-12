import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DisplayBooks from "../../components/DisplayBooks/DisplayBooks";
import UserService from "../../services/UserService";
import Pagination from "../../components/Pagination/Pagination";

const service = new UserService();

export default function HomePage() {

  const [books, setBooks] = useState([]);
  const [count, setCount] = useState();
  const [perPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);

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
      <DisplayBooks books={currentBooks}  />
      <Pagination pageCount={count}  perPage={perPage} paginate={paginate}/>
    </div>
  );
}

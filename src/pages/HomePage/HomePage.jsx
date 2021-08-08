import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import Header from '../../components/Header/Header'
import DisplayBooks from "../../components/DisplayBooks/DisplayBooks";
const service = new UserService();


export default function HomePage() {
    const [books, setBooks] = useState();

    var getBooks = () => {
        service
          .getBooks()
          .then((res) => {
            let books = res.data.result;
            setBooks(books);
            console.log(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        getBooks();
      }, []);


    return (
        <div>
          <Header/>
          <DisplayBooks books={books} get={getBooks}/>
        </div>
    )
}

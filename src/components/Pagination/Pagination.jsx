import React from "react";
import { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../Pagination/Pagination.css";
import { Button } from "@material-ui/core";

export default function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.pageCount / props.perPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    console.log(props);
    console.log(pageNumbers);
    // props.paginate(props.pageCount);
  }, [props]);

  return (
    <nav className="pagination1">
      <ul className="pagination1">
        <input type="button" value="<" className='page-btn'/>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => props.paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <input type="button" value=">"className='page-btn' />
      </ul>
    </nav>
  );
}

import React from "react";

import BookItem from "./BookItem/BookItem";
import "./BookList.css";

const bookList = props => {
  return (
    <section className="BookList">
      {/* {console.log("From BookList",props.books.hits)} */}
      {props.bookList.hits ? props.bookList.hits.map(book => (
        <BookItem
          key={book.objectID}
          book={book}
          deleteBook={props.deleteClicked}
        />
      )) : null}
    </section>
  );
};

export default bookList;

//

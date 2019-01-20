import React from "react";

import BookItem from "./BookItem/BookItem";
import "./BookList.css";

const bookList = props => {
  return (
    <section className="book-list">
      {props.bookList ? props.bookList.map(book => (
        <BookItem
          key={book._id}
          book={book}
          editBook={props.editClicked}
          deleteBook={props.deleteClicked}
        />
      )) : null}
    </section>
  );
};

export default bookList;

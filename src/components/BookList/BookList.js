import React from "react";

import BookItem from "./BookItem/BookItem";
import "./BookList.css";

const bookList = props => {
  const books = props.bookList.map(book => (
    <BookItem
      key={book._id}
      book={book}
      editBook={props.editClicked}
      deleteBook={props.deleteClicked}
    />
  ))
  return (
    <section className="book-list">
      {books}
    </section>
  );
};

export default bookList;

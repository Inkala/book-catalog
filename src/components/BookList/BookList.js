import React from "react";

import BookItem from "./BookItem/BookItem";
import "./BookList.css";

const bookList = props => {
  return (
    <section className="BookList">
      {props.books.hits.map(book => (
        <BookItem
          key={book.objectID}
          book={book}
          deleteBook={props.deleteClicked}
        />
      ))}
    </section>
  );
};

export default bookList;

//

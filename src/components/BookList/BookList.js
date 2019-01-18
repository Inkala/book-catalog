import React from "react";

import BookItem from "./BookItem/BookItem";
import "./BookList.css";

const bookList = props => {
  return (
    <section className="BookList">
      {props.bookList ? props.bookList.map(book => {
            console.log("From Book List", book._id);
            return (
              <BookItem
                key={book._id}
                book={book}
                deleteBook={props.deleteClicked}
              />
            );
          })
        : null}
    </section>
  );
};

export default bookList;

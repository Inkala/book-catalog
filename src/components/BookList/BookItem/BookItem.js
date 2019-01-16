import React from "react";
import Button from "../../Button/Button";

import "./BookItem.css";

const bookItem = ({ book, deleteBook }) => (
  <div className="BookItem">
    <span>
      <b>
        <a href={book.url}>{book.title}</a>
      </b>
    </span>
    <span>{book.author}</span>
    <span>{book.num_comments}</span>
    <span>{book.points}</span>
    <span>
      <Button
        className="Button-inline"
        onClick={() => deleteBook(book.objectID)}
      >
        Remove
      </Button>
    </span>
  </div>
);

export default bookItem;

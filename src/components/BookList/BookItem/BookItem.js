import React from "react";
import Button from "../../Button/Button";

import "./BookItem.css";

const bookItem = ({ book, deleteBook }) => (
  <div className="BookItem">
    <h3>{book.title}</h3>
    <p><span>Author: </span>{book.author}</p>
    <p><span>Genre: </span>{book.genre}</p>
    <p><span>Price: </span>{`$ ${book.price}`}</p>
    {/* <Button
      type="button"
      className="Button-inline"
      onClick={() => editBook(book._id)}
    >
      Edit
    </Button> */}
    <Button
      type="button"
      className="Button-inline"
      onClick={() => deleteBook(book._id)}
    >
      Remove
    </Button>
  </div>
);

export default bookItem;

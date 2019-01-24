import React from "react";
import { Link } from "react-router-dom";

import "./BookItem.css";

const bookItem = ({ book, deleteBook }) => (
  <div className="book-item">
    <h3>{book.title}</h3>
    <p><span>Author: </span>{book.author}</p>
    <p><span>Genre: </span>{book.genre}</p>
    <p><span>Price: </span>{`$ ${book.price}`}</p>
    <div className="book-item__buttons">
      <Link to={`/edit/${book._id}`} className="button button--edit">
        Edit
      </Link>
      <button
        type="button"
        className="button button--delete"
        onClick={() => deleteBook(book)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default bookItem;

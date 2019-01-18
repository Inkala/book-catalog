import React from "react";

import "./AddBook.css";

const addBook = props => (
  <div className="add-book">
    <h3>Add New Book</h3>
    <form className="ab-form" onSubmit={props.onSubmit}>
      <div className="ab-form__item">
        <label className="ab-form__label"> Name:</label>
        <input
          type="text"
          className="ab-form__input"
          value={props.book.name}
          onChange={props.onNameChange}
          />
      </div>
      <div className="ab-form__item">
        <label className="ab-form__label">Author:</label>
        <input
          type="text"
          className="ab-form__input"
          value={props.book.author}
          onChange={props.onAuthorChange}
        />
      </div>
      <div className="ab-form__item">
        <label className="ab-form__label">Genre:</label>
        <input
          type="text"
          className="ab-form__input"
          value={props.book.genre}
          onChange={props.onGenreChange}
        />
      </div>
      <div className="ab-form__item">
        <label className="ab-form__label">Price:</label>
        <span>$</span>
        <input
          type="number"
          className="ab-form__input"
          value={props.book.price}
          onChange={props.onPriceChange}
        />
      </div>
      <input
        type="submit"
        value="Save"
        className="ab-form__button"
      />
    </form>
  </div>
);

export default addBook;

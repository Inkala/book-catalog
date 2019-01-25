import React from "react";
import "./FormFields.css";

const formFields = ({ formTitle, book, handleChange, handleSubmit }) => {
  return (
    <div className="bf-wrapper">
      <h3>{formTitle}</h3>
      <form className="bf-form" onSubmit={handleSubmit}>
        <div className="bf-form__item">
          <label className="bf-form__label"> Title:</label>
          <input
            name="title"
            type="text"
            className="bf-form__input"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="bf-form__item">
          <label className="bf-form__label">Author:</label>
          <input
            name="author"
            type="text"
            className="bf-form__input"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="bf-form__item">
          <label className="bf-form__label">Genre:</label>
          <input
            name="genre"
            type="text"
            className="bf-form__input"
            value={book.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="bf-form__item">
          <label className="bf-form__label">Price:</label>
          <span>$</span>
          <input
            name="price"
            type="number"
            className="bf-form__input"
            value={book.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button button--success">
          Save
        </button>
      </form>
    </div>
  );
};

export default formFields;

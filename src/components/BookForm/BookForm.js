import React, { Component } from "react";
import axios from "axios";

import Button from "../../helpers/Button/Button";
import "./BookForm.css";

class BookForm extends Component {
  state = {
    book: {
      title: "",
      author: "",
      genre: "",
      price: ""
    },
    error: null
  };

  titleChangeHandler = e => {
    const book = { ...this.state.book, title: e.target.value };
    this.setState({ book });
  };

  authorChangeHandler = e => {
    const book = { ...this.state.book, author: e.target.value };
    this.setState({ book });
  };

  genreChangeHandler = e => {
    const book = { ...this.state.book, genre: e.target.value };
    this.setState({ book });
  };

  priceChangeHandler = e => {
    const book = { ...this.state.book, price: e.target.value };
    this.setState({ book });
  };

  submitBookHandler = (e, book) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/book/add", book)
      .then(res => console.log("From axios post:", res.data));
    const resetBook = {
      title: "",
      author: "",
      genre: "",
      price: ""
    };
    this.setState({ book: resetBook });
  };

  render() {
    return (
      <div className="bf-wrapper">
        <form
          className="bf-form"
          onSubmit={e => this.submitBookHandler(e, this.state.book)}
        >
          <div className="bf-form__item">
            <label className="bf-form__label"> Title:</label>
            <input
              type="text"
              className="bf-form__input"
              value={this.state.book.title}
              onChange={this.titleChangeHandler}
            />
          </div>
          <div className="bf-form__item">
            <label className="bf-form__label">Author:</label>
            <input
              type="text"
              className="bf-form__input"
              value={this.state.book.author}
              onChange={this.authorChangeHandler}
            />
          </div>
          <div className="bf-form__item">
            <label className="bf-form__label">Genre:</label>
            <input
              type="text"
              className="bf-form__input"
              value={this.state.book.genre}
              onChange={this.genreChangeHandler}
            />
          </div>
          <div className="bf-form__item">
            <label className="bf-form__label">Price:</label>
            <span>$</span>
            <input
              type="number"
              className="bf-form__input"
              value={this.state.book.price}
              onChange={this.priceChangeHandler}
            />
          </div>
          <Button type="submit" className="bf-form__button">
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export default BookForm;
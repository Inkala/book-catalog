import React, { Component } from "react";
import Button from "../../../helpers/Button/Button";
import "./BookFields.css";

class BookFields extends Component {
  state = {
    book: this.props.book,
    error: null,
    shouldRedirect: false
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

render() {
  return (
    <div className="bf-wrapper">
      <h3>{this.props.title}</h3>
        <form
          className="bf-form"
          onSubmit={e => this.props.onSubmitClicked(e, this.state.book)}
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

export default BookFields;

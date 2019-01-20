import React, { Component } from "react";
import axios from "axios";

import BookList from "../../components/BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddBook from "../../components/AddBook/AddBook";
import { PATH_BASE } from "../../consts";
import "./BookCatalog.css";

/**
 * TODO:
 * Fix MongoDB names (book - books)
 * Create genres dropdown
 * Make Add Books and Genres a different page
 * Add CRUD funcs to genres page
 * Style components
 * Clean code and comments
 */

class BookCatalog extends Component {
  state = {
    book: {
      title: "",
      author: "",
      genre: "",
      price: ""
    },
    bookList: null,
    initialBookList: [],
    error: null
  };

  componentDidMount() {
    axios
      .get(`${PATH_BASE}/book`)
      .then(res => {
        this.setState({
          bookList: res.data,
          initialBookList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  filterBookHandler = e => {
    const searchValue = e.target.value.toLowerCase();
    const filteredList = this.state.initialBookList.filter(
      book =>
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );
    this.setState({ bookList: filteredList });
  };

  searchBookHandler = e => {
    this.fetchDataHandler(this.state.searchTerm);
    e.preventDefault();
  };

  // titleChangeHandler = e => {
  //   const book = { ...this.state.book, title: e.target.value };
  //   this.setState({ book });
  // };

  // authorChangeHandler = e => {
  //   const book = { ...this.state.book, author: e.target.value };
  //   this.setState({ book });
  // };

  // genreChangeHandler = e => {
  //   const book = { ...this.state.book, genre: e.target.value };
  //   this.setState({ book });
  // };

  // priceChangeHandler = e => {
  //   const book = { ...this.state.book, price: e.target.value };
  //   this.setState({ book });
  // };

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

  deleteBookHandler = id => {
    console.log("From delete",id)
    // const updatedBookList = this.state.bookList.filter(
    //   book => book._id !== id);
    // this.setState({ bookList: updatedBookList });
    axios
      .get("http://localhost:4000/book/delete/" + id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return (
      <div className="book-catalog">
        <SearchBar
          onSearchChange={this.filterBookHandler}
        />
        <AddBook
          book={this.state.book}
          // onTitleChange={this.titleChangeHandler}
          // onAuthorChange={this.authorChangeHandler}
          // onGenreChange={this.genreChangeHandler}
          // onPriceChange={this.priceChangeHandler}
          onSubmit={this.submitBookHandler}
        />
        {this.state.bookList ? (
          <BookList
            bookList={this.state.bookList}
            editClicked={this.editBookHandler}
            deleteClicked={this.deleteBookHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default BookCatalog;

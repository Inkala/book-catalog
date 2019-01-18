import React, { Component } from "react";
import axios from "axios";

import BookList from "../../components/BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddBook from "../../components/AddBook/AddBook";
import Button from "../../components/Button/Button";

import { PATH_BASE } from "../../consts";
import "./BookCatalog.css";

class BookCatalog extends Component {
  state = {
    book: {
      title: "",
      author: "",
      genre: "",
      price: ""
    },
    bookList: null,
    // initialBookList: [],
    // searchTerm: DEFAULT_QUERY,
    error: null
  };

  // searchArticlesHandler(bookList) {
  //   this.setState({ bookList, initialBookList: bookList.hits });
  // }

  fetchDataHandler() {
    axios
      .get(`${PATH_BASE}/book`)
      .then(res => {
        console.log("Res Data!!!", res.data);
        this.setState({ bookList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchDataHandler();
  }

  deleteBookHandler = id => {
    const updatedBookList = this.state.bookList.filter(book => book._id !== id);
    this.setState({ bookList: updatedBookList });
  };

  filterBookHandler = e => {
    const searchValue = e.target.value.toLowerCase();
    const filteredList = this.state.initialBookList.filter(
      book =>
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );
    this.setState({
      bookList: { ...this.state.bookList, hits: filteredList },
      searchTerm: searchValue
    });
  };

  searchBookHandler = e => {
    this.fetchDataHandler(this.state.searchTerm);
    e.preventDefault();
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

  submitBookHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/book/add", this.state.book)
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
    const { bookList, term } = this.state;
    const page = bookList && bookList.page;
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return (
      <div className="BookCatalog">
        <SearchBar
          onSearchChange={this.filterBookHandler}
          onSubmit={this.searchBookHandler}
        />
        <AddBook
          book={this.state.book}
          onTitleChange={this.titleChangeHandler}
          onAuthorChange={this.authorChangeHandler}
          onGenreChange={this.genreChangeHandler}
          onPriceChange={this.priceChangeHandler}
          onSubmit={this.submitBookHandler}
        />
        {bookList ? (
          <BookList
            bookList={bookList}
            deleteClicked={this.deleteBookHandler}
          />
        ) : null}
        <Button onClick={() => this.fetchDataHandler(term, page + 1)}>
          More
        </Button>
      </div>
    );
  }
}

export default BookCatalog;

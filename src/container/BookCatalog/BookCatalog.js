import React, { Component } from "react";
import axios from "axios";

import BookList from "../../components/BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddBook from "../../components/AddBook/AddBook";
import Button from "../../components/Button/Button";

import { SEARCH_URL, DEFAULT_QUERY } from "../../consts";
import "./BookCatalog.css";

class BookCatalog extends Component {
  state = {
    book: {
      name: "",
      author: "",
      genre: "",
      price: ""
    },
    bookList: null,
    initialBookList: [],
    searchTerm: DEFAULT_QUERY,
    error: null
  };

  searchArticlesHandler(bookList) {
    this.setState({ bookList, initialBookList: bookList.hits });
  }

  fetchDataHandler(term, page = 0) {
    axios(`${SEARCH_URL}${term}&page=${page}`)
      .then(bookList => this.searchArticlesHandler(bookList.data))
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.fetchDataHandler(this.state.searchTerm);
  }

  deleteBookHandler = id => {
    const updatedBookList = this.state.bookList.hits.filter(
      book => book.objectID !== id
    );
    this.setState({
      bookList: { ...this.state.bookList, hits: updatedBookList }
    });
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

  nameChangeHandler = e => {
    const book = { ...this.state.book, name: e.target.value };
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
      name: "",
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
          onNameChange={this.nameChangeHandler}
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

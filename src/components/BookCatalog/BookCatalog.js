import React, { Component } from "react";
import axios from "axios";

import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { SEARCH_URL, DEFAULT_QUERY } from '../../consts';
import "./BookCatalog.css";

class BookCatalog extends Component {
  state = {
    initialBooks: [],
    books: null,
    searchTerm: DEFAULT_QUERY,
    error: null
  };

  searchArticlesHandler(books) {
    this.setState({ books, initialBooks: books.hits });
  }

  fetchDataHandler(term, page = 0) {
    axios(`${SEARCH_URL}${term}&page=${page}`)
      .then(books => this.searchArticlesHandler(books.data))
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.fetchDataHandler(this.state.searchTerm);
  }

  deleteBookHandler = id => {
    const updatedBooks = this.state.books.hits.filter(
      book => book.objectID !== id
    );
    this.setState({
      books: { ...this.state.books, hits: updatedBooks }
    });
  };

  filterBookHandler = e => {
    const searchValue = e.target.value.toLowerCase();
    const filteredList = this.state.initialBooks.filter(
      book =>
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );
    this.setState({
      books: { ...this.state.books, hits: filteredList },
      searchTerm: searchValue
    });
  };

  searchBookHandler = e => {
    this.fetchDataHandler(this.state.searchTerm);
    e.preventDefault();
  };

  render() {
    const { books, term } = this.state;
    const page = books && books.page;
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return (
      <div className="BookCatalog">
        <SearchBar
          onSearchChange={this.filterBookHandler}
          onSubmit={this.searchBookHandler}
        />
        <p>AddArticle</p>
        {books ? (
          <BookList books={books} deleteClicked={this.deleteBookHandler} />
        ) : null}
        <Button onClick={() => this.fetchDataHandler(term, page + 1)}>
          More
        </Button>
      </div>
    );
  }
}

export default BookCatalog;

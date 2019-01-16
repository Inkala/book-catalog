import React, { Component } from "react";

import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";
import "./BookCatalog.css";

// const books = [
//   {
//     title: "React",
//     url: "https://reactjs.org/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0
//   },
//   {
//     title: "Redux",
//     url: "https://redux.js.org/",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1
//   }
// ];

const DEFAULT_QUERY = "redux";

// Variables to create the endpoint url

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

class BookCatalog extends Component {
  state = {
    initialBooks: "",
    books: null,
    searchTerm: DEFAULT_QUERY
  };

  searchArticlesHandler(books) {
    this.setState({ books });
  }

  componentDidMount() {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${this.state.searchTerm}`)
      .then(response => response.json())
      .then(books => this.searchArticlesHandler(books))
      .catch(error => error);
  }

  deleteBookHandler = id => {
    const isNotId = book => book.objectID !== id;
    const updatedBooks = this.state.books.hits.filter(isNotId);
    this.setState({
      books: { ...this.state.books, hits: updatedBooks }
    });
  };

  searchBookHandler = e => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredList = this.state.initialBooks.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    this.setState({ books: filteredList });
  };

  render() {
    return (
      <div className="BookCatalog">
        <SearchBar onSearchChange={this.searchBookHandler} />
        <p>AddBook</p>
        {this.state.books ? (
          <BookList
            books={this.state.books}
            deleteClicked={this.deleteBookHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default BookCatalog;

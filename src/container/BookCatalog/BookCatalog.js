import React, { Component } from "react";
import axios from "axios";

import BookList from "../../components/BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { PATH_BASE } from "../../consts";
import "./BookCatalog.css";

/**
 * TODO:
 * Confirmation Modal
 * Handle success and  error messages
 * Loading spinner
 * Write tests
 * Style components
 * Clean code and comments and this.props/this.state
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
    genreList: [{ value: "", label: "All" }],
    error: null,
    genreValue: ""
  };

  /*--- Read book Data from DB ---*/

  fetchBooksHandler = () => {
    axios
      .get(`${PATH_BASE}/book`)
      .then(res => {
        this.setState({ bookList: res.data, initialBookList: res.data });
        this.genreListHandler();
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*--- Call fetch method when app loads ---*/

  componentDidMount() {
    this.fetchBooksHandler();
  }

  /*--- Search Bar Methods ---*/

  filterBookHandler = e => {
    const searchValue = e.target.value.toLowerCase();
    const filteredList = this.state.initialBookList.filter(
      book =>
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );
    this.setState({ bookList: filteredList });
  };

  genderFilterHandler = term => {
    const filteredList = this.state.initialBookList.filter(book =>
      book.genre.includes(term.value)
    );
    this.setState({ bookList: filteredList });
  };

  /*--- Delete Books ---*/

  deleteBookHandler = book => {
    if (window.confirm(`Are you sure you want to delete ${book.title}?`)) {
      axios
        .get(`${PATH_BASE}/book/delete/${book._id}`)
        .then(res => {
          console.log("Deleted");
          this.fetchBooksHandler();
        })
        .catch(err => console.log(err));
    }
  };

  /*--- Genres Methods ---*/

  // Handles filtering
  onGenreChange = e => {
    this.setState({ genreValue: e.target.value });
  };

  // Handles Dropdown content
  genreListHandler() {
    const genres = [];
    this.state.bookList.map(book => genres.push(book.genre));
    const genreList = [this.state.genreList[0], ...new Set(genres.sort())];
    this.setState({ genreList });
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return (
      <div className="book-catalog">
        <SearchBar
          onSearchChange={this.filterBookHandler}
          genreList={this.state.genreList}
          onDropdownChange={this.genderFilterHandler}
        />
        {this.state.bookList ? (
          <BookList
            bookList={this.state.bookList}
            editClicked={this.editBookHandler}
            deleteClicked={this.deleteBookHandler}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default BookCatalog;

// Tests
// All components load correctly
// Creat Book
// Read Book
// Update Book
// Delete Book
// Creat Genre
// Read Genre
// Update Genre
// Delete Genre

// Genres
// Genres list
// Add Genres Button and input
// Save button must be desable
// Edit button in all genres will show the input
// Edited imput enables the save button

// Book form
// Replace genres input with dropdown

// Loading Component

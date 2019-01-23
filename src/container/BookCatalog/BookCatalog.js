import React, { Component } from "react";
import axios from "axios";

import BookList from "../../components/BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { PATH_BASE } from "../../consts";
import "./BookCatalog.css";

/**
 * TODO:
 * Separate add from edit forms
 * Make Genres page
 * Add CRUD funcs to genres page
 * Make fields required
 * Handle success and  error messages
 * Write tests
 * Style components
 * Clean code and comments and this.props/this.state
 * Loading spinner
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
    inputParam: "",
    dropdownParam: "",
    error: null
  };

  fetchDataHandler = () => {
    axios
      .get(`${PATH_BASE}/book`)
      .then(res => {
        this.setState({ bookList: res.data, initialBookList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchDataHandler();
    setTimeout(this.fetchDataHandler, 500);
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

  gendreFilterHandler = term => {
    console.log(term)
    const filteredList = this.state.initialBookList.filter(book =>
      book.genre.includes(term.value)
    );
    this.setState({ bookList: filteredList });
  };

  deleteBookHandler = book => {
    if (window.confirm(`Are you sure you want to delete ${book.title}?`)) {
      axios
        .get(`${PATH_BASE}/book/delete/${book._id}`)
        .then(res => {
          console.log("Deleted");
          this.fetchDataHandler();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }

    return (
      <div className="book-catalog">
        <SearchBar
          onSearchChange={this.filterBookHandler}
          onDropdownChange={this.gendreFilterHandler}
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

// Genres Backend
  // Create a schema for genres and other files
  // Conect back and front
  // Get and post from genres db

// Genres Front end
  // Genres list from db
  // Add Genres Button and input
  // Save button must be desable
  // Edit button in all genres will show the input
  // Edited imput enables the save button

// Book form
  // Replace genres input with dropdown


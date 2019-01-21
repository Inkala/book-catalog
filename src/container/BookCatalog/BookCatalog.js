import React, { Component } from "react";
import axios from "axios";

import BookList from "../../components/BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { PATH_BASE } from "../../consts";
import "./BookCatalog.css";

/**
 * TODO:
 * Change reset form for redirect
 * Create genres dropdown
 * Make Add Books and Genres a different page
 * Refresh Form Name
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
    error: null
  };

  fetchDataHandler() {
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
  };

  componentDidMount() {
    this.fetchDataHandler();
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

  deleteBookHandler = book => {
    if (window.confirm(`Are you sure you want to delete ${book.title}?`)) {
      console.log(this)
      axios
      .get(`${PATH_BASE}/book/delete/${book._id}`)
      .then(res => {
        console.log("Deleted");
        this.fetchDataHandler()
      }).catch(err => console.log(err));
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

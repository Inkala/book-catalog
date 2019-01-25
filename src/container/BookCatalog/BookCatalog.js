import React, { Component } from "react";
import axios from "axios";

import BookList from "../../components/BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Modal from "../../components/UI/Modal/Modal";
import Loading from "../../components/UI/Loading/Loading"
import { PATH_BASE } from "../../consts";

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
    genreValue: "",
    bookTitle: "",
    showModal: false
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

  showModal = book => {
    this.setState({ book, showModal: true });
  };

  handleModalClicked = e => {
    if (e.target.value) {
      this.deleteBookHandler();
    }
    this.setState({ showModal: false });
  };

  deleteBookHandler() {
    axios
      .get(`${PATH_BASE}/book/delete/${this.state.book._id}`)
      .then(res => {
        console.log("Deleted");
        this.fetchBooksHandler();
      })
      .catch(err => console.log(err));
  }

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
      <div style={{'padding-top': 90,
        width: '100%'}}>
        <Modal show={this.state.showModal}>
          <p>
            Are you sure you want to delete <b>{this.state.book.title}</b>?
          </p>
          <div className="modal__buttons">
            <button
              className="button button--success"
              onClick={this.handleModalClicked}
              value="delete"
            >
              Ok
            </button>
            <button
              className="button button--delete"
              onClick={this.handleModalClicked}
            >
              Cancel
            </button>
          </div>
        </Modal>
        <SearchBar
          onSearchChange={this.filterBookHandler}
          genreList={this.state.genreList}
          onDropdownChange={this.genderFilterHandler}
        />
        {this.state.bookList ? (
          <BookList
            bookList={this.state.bookList}
            editClicked={this.editBookHandler}
            deleteClicked={this.showModal}
          />
        ) : (<Loading />)}
      </div>
    );
  }
}

export default BookCatalog;

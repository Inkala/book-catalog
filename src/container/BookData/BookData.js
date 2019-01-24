import React, { Component } from "react";
import axios from "axios";

// import BookCatalog from "../../components/BookCatalog/BookCatalog";
// import BookForm from "../../components/BookForm/BookForm";
// import Genres from "../../components/Genres/Genres";
import { PATH_BASE } from "../../consts";
import MainMenu from "../../components/MainMenu/MainMenu";

class BookData extends Component {
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

  /*--- Read book Data from DB ---*/

  fetchBookListHandler = () => {
    axios
      .get(`${PATH_BASE}/book`)
      .then(res => {
        this.setState({ bookList: res.data, initialBookList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*--- Call fetch method when app loads ---*/

  componentDidMount() {
    this.fetchBookListHandler();
  }

  /*--- Create books ---*/

  submitBookHandler(e, book) {
    e.preventDefault();
    axios
      .post(`${PATH_BASE}/book/add`, book)
      .then(res => console.log("From axios post:"));
    // const resetBook = { title: "", author: "", genre: "", price: "" };
    this.props.history.push({
      pathname: "/",
      state: { book }
    });
  }

  /*--- Update Books ---*/

  fetchBookHandler() {
    if (this.props.match.params.id) {
      axios
        .get(`${PATH_BASE}/book/${this.props.match.params.id}`)
        .then(res => {
          this.setState({ book: res.data });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  editBookHandler(e, book) {
    e.preventDefault();
    axios
      .post(`${PATH_BASE}/book/edit/${book._id}`, book)
      .then(res => {
        console.log("Edit succesful");
      })
      .catch(err => console.log(err));
    this.props.history.push("/");
  }

  /*--- Delete Books ---*/

  deleteBookHandler = book => {
    if (window.confirm(`Are you sure you want to delete ${book.title}?`)) {
      axios
        .get(`${PATH_BASE}/book/delete/${book._id}`)
        .then(res => {
          console.log("Deleted");
          this.fetchBookListHandler();
        })
        .catch(err => console.log(err));
    }
  };

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

  gendreFilterHandler = term => {
    console.log(term);
    const filteredList = this.state.initialBookList.filter(book =>
      book.genre.includes(term.value)
    );
    this.setState({ bookList: filteredList });
  };

  /*--- Book Form Methods ---*/

  // Handle value changes in form input fields

  formChangeHandler = e => {
    const book = {
      ...this.state.book,
      [e.target.name]: e.target.value
    };
    this.setState({ book });
  };

  // Identifies if form is for Add or for Edit

  submitFormHandler = e => {
    this.submitBookHandler(e, this.state.book);
    // this.editBookHandler(e, this.state.book);
  };

  /*--- CRUD Genres Methods ---*/

  submitGenreHandler = e => {
    console.log("Saved!");
    e.preventDefault();
    console.log(e);
  };

  // componentDidUpdate() {
  //   const initialBook = {
  //     title: "",
  //     author: "",
  //     genre: "",
  //     price: ""
  //   };
  //   if (this.state.book._id && !this.props.match.params.id) {
  //     this.setState({ book: initialBook });
  //   }
  // }

  render() {
    console.log(this.state);
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return (
      <div>
        <MainMenu book={this.state.book} />
      </div>
    );
  }
}

export default BookData;

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

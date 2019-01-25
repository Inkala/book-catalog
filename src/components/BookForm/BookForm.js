import React, { Component } from "react";
import axios from "axios";

import FormFields from "./FormFields/FormFields";
import { PATH_BASE } from "../../consts";
import Modal from "../UI/Modal/Modal";

class BookForm extends Component {
  state = {
    book: {
      title: "",
      author: "",
      genre: "",
      price: ""
    },
    showModal: false
  };

  /*--- Create book methods ---*/

  // Sets initial empty book when Adding new book
  componentDidUpdate() {
    const initialBook = {
      title: "",
      author: "",
      genre: "",
      price: ""
    };
    if (this.state.book._id && !this.props.match.params.id) {
      this.setState({ book: initialBook });
    }
  }

  // Sends new book to db
  submitBookHandler(e, book) {
    e.preventDefault();
    axios
      .post(`${PATH_BASE}/book/add`, book)
      .then(res => console.log("From axios post:"));
  }

  /*--- Update Books ---*/

  // Fetches single book when Editing book
  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get(`${PATH_BASE}/book/${this.props.match.params.id}`)
        .then(res => {
          this.setState({ book: res.data, editing: true });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  // Sends updated book to db
  editBookHandler(e, book) {
    e.preventDefault();
    axios
      .post(`${PATH_BASE}/book/edit/${book._id}`, book)
      .then(res => {
        console.log("Edit succesful");
      })
      .catch(err => console.log(err));
  }

  /*--- Form Methods ---*/

  // Retreives information from form fields
  formChangeHandler = e => {
    e.target.value =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    const book = {
      ...this.state.book,
      [e.target.name]: e.target.value
    };
    this.setState({ book });
  };

  // Chooses where to send the book information
  submitFormHandler = e => {
    if (this.props.match.path === "/add") {
      this.submitBookHandler(e, this.state.book);
    } else {
      this.editBookHandler(e, this.state.book);
    }
    this.setState({ showModal: true });
  };

  handleModalShow = () => {
    this.setState({ showModal: false });
    if (this.state.showModal) {
      this.props.history.push("/");
    }
  };

  render() {
    const modalMessage = this.state.book.title.length ? "updated" : "saved";
    const formName = this.state.book.title.length ? "Edit" : "Add New";
    const formParams = ["Title", "Author", "Genre", "Price"]
    return (
      <div style={{width: '75%'}}>
        <Modal show={this.state.showModal}>
          <p>Your book has been succesfully {modalMessage}</p>
          <button
            className="button button--success"
            onClick={this.handleModalShow}
          >
            Ok
          </button>
        </Modal>
        <FormFields
          book={this.state.book}
          handleChange={this.formChangeHandler}
          formTitle={`${formName} Book`}
          handleSubmit={this.submitFormHandler}
          formParams={formParams}
        />
      </div>
    );
  }
}

export default BookForm;

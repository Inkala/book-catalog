import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

import FormFields from "./FormFields/FormFields";
import { PATH_BASE } from "../../consts";
import "./BookForm.css";

class BookForm extends Component {
  state = {
    book: {
      title: "",
      author: "",
      genre: "",
      price: ""
    },
    shouldRedirect: false
  };

  componentDidMount() {
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

  formChangeHandler = e => {
    const book = {
      ...this.state.book,
      [e.target.name]: e.target.value
    };
    this.setState({ book });
  };

  submitFormHandler = (e) => {
    // this.submitBookHandler(e, this.state.book);
    this.editBookHandler(e, this.state.book);
  }

  submitBookHandler(e, book) {
    e.preventDefault();
    axios
    .post(`${PATH_BASE}/book/add`, book)
    .then(res => console.log("From axios post:"));
    // const resetBook = { title: "", author: "", genre: "", price: "" };
    this.setState({ shouldRedirect: true });
  };
  
  editBookHandler(e, book) {
    e.preventDefault();
    axios
      .put(`${PATH_BASE}/book/edit/${book._id}`, book)
      .then(res => {
        console.log("Edit succesful");
      })
      .catch(err => console.log(err));
    this.setState({ shouldRedirect: true });
  };

  render() {
    // console.log("Should Redirect?", this.state.shouldRedirect)
    const formName = this.state.book.title.length ? "Edit" : "Add New";
    return (
      <div className="book-form">
        <FormFields
          book={this.state.book}
          handleChange={this.formChangeHandler}
          title={`${formName} Book`}
          handleSubmit={this.submitFormHandler}
        />
        {this.state.shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default BookForm;

import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

import FormFields from "./FormFields/FormFields";
import { PATH_BASE } from "../../consts";
import "./BookForm.css";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.location.book || 
      {
        title: "",
        author: "",
        genre: "",
        price: ""
      },
      shouldRedirect: false
    };
  }

  submitBookHandler = (e, book) => {
    e.preventDefault();
    axios
      .post(`${PATH_BASE}/book/add`, book)
      .then(res => console.log("From axios post:"));
    const resetBook = {
      title: "",
      author: "",
      genre: "",
      price: ""
    };
    this.setState({ book: resetBook, shouldRedirect: true });
  };

  editBookHandler = (e, book) => {
    e.preventDefault();
    console.log('e:', e)
    console.log('book:', book)
    axios
      .put(`${PATH_BASE}/book/edit/${book._id}`, book)
      .then(res => {
        console.log("Edit succesful");
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("Book:", this.state.book);
    let [formName, submitFunction] = ["Add New", this.submitBookHandler];
    if (this.state.book.title.length) {
      [formName, submitFunction] = ["Edit", this.editBookHandler];
    }
    console.log(formName)
    return (
      <div className="book-form">
        <FormFields
          book={this.state.book}
          title={`${formName} Book`}
          onSubmitClicked={submitFunction}
        />
        {this.state.shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default BookForm;

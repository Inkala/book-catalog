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
    }
  };

  componentDidUpdate() {
    const initialBook = {
      title: "",
      author: "",
      genre: "",
      price: ""
    }
  if (this.state.book._id && !this.props.match.params.id) {
    this.setState({book: initialBook})
  };
  }

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
    // console.log("book:", book);
    // axios
    //   .put(`${PATH_BASE}/book/edit/${book._id}`, book)
    //   .then(res => {
    //     console.log("Edit succesful");
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    let [formName, submitFunction] = ["Add New", this.submitBookHandler];
    if (this.state.book.title.length) {
      [formName, submitFunction] = ["Edit", this.editBookHandler];
    }
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

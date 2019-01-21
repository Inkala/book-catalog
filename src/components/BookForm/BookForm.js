import React, { Component } from "react";
// import axios from "axios";
import { Redirect } from "react-router";

import BookFields from "./BookFields/BookFields";
// import { PATH_BASE } from "../../consts";
import "./BookForm.css";

class BookForm extends Component {
  state = {
    formName: "",
    book: {
      title: "",
      author: "",
      genre: "",
      price: ""
    },
    shouldRedirect: false
  };

  componentDidMount = () => {
    const book this.props.location.state.book);
    const formName = this.props.match.path === "/add" ? "Add New" : "Edit";
    this.setState({ formName });
  };

  submitBookHandler = (e, book) => {
    e.preventDefault();
    alert("From Add Book");
    // axios
    //   .post(`${PATH_BASE}/book/add`, book)
    //   .then(res => console.log("From axios post:", res.data));
    // const resetBook = {
      //   title: "",
      //   author: "",
      //   genre: "",
      //   price: ""
      // };
      // this.setState({ book: resetBook, shouldRedirect: true });
    };
    
    editBookHandler = (e, book) => {
      e.preventDefault();
      alert("From Edit Book");
    // axios
    //   .put(`${PATH_BASE}/book/edit/${book._id}`, book)
    //   .then(res => {
    //     console.log("Edit succesful");
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="book-form">
        <BookFields
          book={this.state.book}
          title={`${this.state.formName} Book`}
          onSubmitClicked={this.submitBookHandler}
        />
        {this.state.shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default BookForm;

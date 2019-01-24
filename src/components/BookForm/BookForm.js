import React, { Component } from "react";

// import FormFields from "./FormFields/FormFields";
import "./BookForm.css";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        name: "test"
      }
    }
  }
  render () {
    console.log("From Book Form", this.props);
    // const formName = props.book.title.length ? "Edit" : "Add New";
    return (
      <div className="book-form">
        {/* <FormFields
          book={props.book}
          handleChange={props.formChangeHandler}
          title={`${formName} Book`}
          handleSubmit={props.submitFormHandler}
        /> */}
      </div>
    );
  }

};

export default BookForm;
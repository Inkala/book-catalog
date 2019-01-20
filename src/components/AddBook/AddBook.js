import React from "react";

import Wrapper from "../../helpers/Wrapper/Wrapper";
import BookForm from "../../components/BookForm/BookForm";
import "./AddBook.css";

const addBook = props => (
  <Wrapper>
    <div className="add-book">
      <h3>Add New Book</h3>
      <BookForm
        book={props.book}
        onSubmitClicked={props.onSubmit}
      />
    </div>
  </Wrapper>
);

export default addBook;

import React from 'react';

import Wrapper from "../../helpers/Wrapper/Wrapper";
import BookForm from "../../components/BookForm/BookForm";
import "./EditBook.css";

const editBook = props => (
  <Wrapper>
    <div className="edit-book">
      <h3>Edit Book</h3>
      <BookForm
        book={props.book}
        onSubmitClicked={props.onSubmit}
      />
    </div>
  </Wrapper>
);

export default editBook;

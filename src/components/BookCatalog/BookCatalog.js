import React from "react";

import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";
import "./BookCatalog.css";

const bookCatalog = props => {
  return (
    <div className="book-catalog">
      <SearchBar
        onSearchChange={props.filterBookHandler}
        onDropdownChange={props.gendreFilterHandler}
      />
      <BookList
        bookList={props.bookList}
        editClicked={props.editBookHandler}
        deleteClicked={props.deleteBookHandler}
      />
    </div>
  );
};

export default bookCatalog;
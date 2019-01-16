import React from "react";

import Button from "../Button/Button";
import "./SearchBar.css";

const searchBar = props => (
  <form className="SearchBar" onSubmit={props.onSubmit}>
    <input
      type="text"
      className="searchInput"
      placeholder="Search for an article..."
      onChange={props.onSearchChange}
    />
    <Button  type="submit">
      Search
    </Button>
  </form>
);

export default searchBar;

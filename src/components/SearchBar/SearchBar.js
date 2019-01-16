import React from "react";

import './SearchBar.css';

const searchBar = (props) => (
    <form className="SearchBar">
      <input
        type="text"
        className="searchInput"
        placeholder="Search for an article..."
        onChange={props.onSearchChange}
      />
    </form>
);

export default searchBar;

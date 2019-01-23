import React from "react";

import Dropdown from "../Dropdown/Dropdown";
import "./SearchBar.css";

const searchBar = props => (
  <div className="search-bar">
    <input
      type="text"
      className="search-bar__input"
      placeholder="Search for an article..."
      onChange={props.onSearchChange}
    />
    <Dropdown />
  </div>
);

export default searchBar;
import React from "react";

import Dropdown from "../Dropdown/Dropdown";
import "./SearchBar.css";

const searchBar = props => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for an book..."
        onChange={props.onSearchChange}
      />
      <Dropdown
        genreList={props.genreList}
        onDropdownChange={props.onDropdownChange}
      />
    </div>
  );
};

export default searchBar;

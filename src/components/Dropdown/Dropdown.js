import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./Dropdown.css";

const options = [
  "Action",
  "Adventure",
  "Fantasy",
  "Fiction",
  "Horror",
  "Thriller"
];
const defaultOption = "Genre";

const dropdown = props => (
  <div className="dropdown-wrapper">
    <Dropdown
      options={options}
      onChange={props.dropdownChanged}
      value={defaultOption}
      placeholder="Select an option"
      // disabled
      controlClassName="dropdown"
      placeholderClassName='dd-placeholder'
menuClassName='dd-menu'
    />
  </div>
);

export default dropdown;

// className='dropdown'
// placeholderClassName='dd-placeholder'
// arrowClassName='dd-arrow'

// "Action", "Adventure", "Fantasy", "Fiction", "Horror", "Thriller";

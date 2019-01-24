import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./Dropdown.css";

const options = [
  {value: "", label: "All"},
  "Action",
  "Adventure",
  "Fantasy",
  "Fiction",
  "Horror",
  "Thriller"
];
const defaultOption = options[0]

const dropdown = props => (
  <div className="dropdown-wrapper">
    <Dropdown
      options={options}
      onChange={props.onDropdownChange}
      value={defaultOption}
      placeholder="Select an option"
      controlClassName="dropdown"
      placeholderClassName="dd-placeholder"
      menuClassName="dd-menu"
    />
  </div>
);

export default dropdown;

// className='dropdown'
// placeholderClassName='dd-placeholder'
// arrowClassName='dd-arrow'

// "Action", "Adventure", "Fantasy", "Fiction", "Horror", "Thriller";

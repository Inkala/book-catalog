import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./Dropdown.css";

const dropdown = props => {
  const options = props.genreList;
  const defaultOption = "Genres";
  return (
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
};

export default dropdown;

// className='dropdown'
// placeholderClassName='dd-placeholder'
// arrowClassName='dd-arrow'

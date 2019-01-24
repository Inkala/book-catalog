import React from "react";

import "./Genres.css";

const genres = props => {
  return (
    <div className="genres">
      <h2>Genres</h2>
      <input
        type="text"
        className="search-bar__input"
        value={props.genreValue}
        onChange={props.onDropdownChange}
      />
      <button type="submit">Save</button>
    </div>
  );
};

export default genres;

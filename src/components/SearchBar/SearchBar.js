import React from "react";

import GenresFilter from "./GenresFilter/GenresFilter";
import Wrapper from "../../helpers/Wrapper/Wrapper";
import "./SearchBar.css";

const searchBar = props => (
  <Wrapper>
    <form className="search-bar" onSubmit={props.onSubmit}>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for an article..."
        onChange={props.onSearchChange}
      />
      <GenresFilter />
    </form>
  </Wrapper>
);

export default searchBar;

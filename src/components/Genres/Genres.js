import React, { Component } from "react";
import axios from "axios";

import { PATH_BASE } from "../../consts";
import "./Genres.css";

class Genres extends Component {
  state = {
    genreList: [],
    genreValue: ""
  };



  onGenreChange = e => {
    this.setState({ genreValue: e.target.value });
  };

  render() {
    return (
      <div className="genres">
        <h2>Genres</h2>
        <form className="genres-form" onSubmit={this.submitGenreHandler}>
          <input
            type="text"
            className="search-bar__input"
            value={this.state.genreValue}
            onChange={this.onGenreChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Genres;

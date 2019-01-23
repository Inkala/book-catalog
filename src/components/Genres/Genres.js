import React, { Component } from "react";
import axios from "axios";

import Button from "../../helpers/Button/Button";
import { PATH_BASE } from "../../consts";
import "./Genres.css";

class Genres extends Component {
  state = {
    genreList: [],
    genreValue: ""
  };

  // componentDidMount() {
  //   axios
  //     .get(`${PATH_BASE}/genre`)
  //     .then(res => {
  //       this.setState({ genreList: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  submitGenreHandler = (e) => {
    console.log("Saved!")
    e.preventDefault();
    axios
      .post(`${PATH_BASE}/genre/add`, this.state.genreValue)
      .then(res => console.log("From axios post:"));
    // this.props.history.push({
    //   pathname: '/',
    //   state: {book}
    // })
  }

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
          <Button type="submit">Save</Button>
        </form>
      </div>
    );
  }
}

export default Genres;

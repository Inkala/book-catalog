import React, { Component } from "react";

import BookCatalog from "./components/BookCatalog/BookCatalog";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hacker News</h1>
        <BookCatalog />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import MainMenu from "./components/MainMenu/MainMenu";
import BookCatalog from "./container/BookCatalog/BookCatalog";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <BookCatalog />
      </div>
    );
  }
}

export default App;

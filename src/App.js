import React, { Component } from "react";

// import MainMenu from "./components/MainMenu/MainMenu";
import BookData from "./container/BookData/BookData";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookData />
      </div>
    );
  }
}

export default App;

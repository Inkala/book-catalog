import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BookCatalog from "../../container/BookCatalog/BookCatalog";
import AddBook from "../AddBook/AddBook";
import EditBook from "../EditBook/EditBook";
import "./MainMenu.css";

const mainMenu = props => (
  <Router>
    <div className="container">
      <nav className="main-menu">
        <Link to={"/"} className="menu-logo">BookStore</Link>
        <ul className="menu-items">
          <li className="menu-item">
            <Link to={"/add"}>Add Book</Link>
          </li>
          <li className="menu-item">
            <Link to={"/genres"}>Genres</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={BookCatalog} />
        <Route path="/add" component={AddBook} />
        <Route path="/edit/:id" component={EditBook} />
        {/* <Route path="/genres/" component={Genres} /> */}
      </Switch>
    </div>
  </Router>
);

export default mainMenu;




  // <header className="">
  //   <span>BookStore</span>
  //   <ul className="menu-items">
  //     <li>Books</li>
  //     <li>Genres</li>
  //     <li>Add Book</li>
  //   </ul>
  // </header>

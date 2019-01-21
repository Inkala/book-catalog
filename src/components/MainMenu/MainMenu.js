import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BookCatalog from "../../container/BookCatalog/BookCatalog";
import BookForm from "../BookForm/BookForm";
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
        <Route path="/add" component={BookForm} />
        <Route path="/edit/:id" component={BookForm} />
        {/* <Route path="/genres/" component={Genres} /> */}
      </Switch>
    </div>
  </Router>
);

export default mainMenu;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BookCatalog from "../../container/BookCatalog/BookCatalog";
import AddBook from "../AddBook/AddBook";
import EditBook from "../EditBook/EditBook";
import "./MainMenu.css";

const mainMenu = props => (
  <Router>
    <div className="MainMenu">
      <nav className="navbar">
        <Link to={"/"} className="MenuLogo">BookStore</Link>
        <div>
          <ul className="MenuItems">
            <li className="MenuItem">
              <Link to={"/books"}>Books</Link>
            </li>
            <li className="MenuItem">
              <Link to={"/add-book"}>Add Book</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/create" component={AddBook} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/books" component={BookCatalog} />
      </Switch>
    </div>
  </Router>
);

export default mainMenu;




  // <header className="">
  //   <span>BookStore</span>
  //   <ul className="MenuItems">
  //     <li>Books</li>
  //     <li>Genres</li>
  //     <li>Add Book</li>
  //   </ul>
  // </header>

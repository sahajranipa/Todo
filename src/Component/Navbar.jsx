import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <nav>
        <h1>ToDo React App 📄 </h1>
        <ul>
          <li>
            <Link to="/" exact>
              My Todos
            </Link>
          </li>
          <li>
            <Link to="/favourite">FavoriteTodos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

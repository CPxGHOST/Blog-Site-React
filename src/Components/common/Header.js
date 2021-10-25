import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-elements">
        <NavLink to="/" exact className="nav-bar-element">
          Blog Site
        </NavLink>
        <NavLink to="/about" className="nav-bar-element">About</NavLink>
        <NavLink to="/add" className="add-blog">Add Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;

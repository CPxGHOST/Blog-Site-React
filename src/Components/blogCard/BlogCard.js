import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogCard.css";
import { NavLink } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="card">
      <h5 className="card-header">Category</h5>
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Content of the blog.</p>
        <div className="buttons">
          <NavLink to="/viewblog" className="btn btn-primary">
            View Blog
          </NavLink>
          <NavLink to="/updateblog" className="btn btn-success">
            Update Blog
          </NavLink>
          <NavLink to="/deleteblog" className="btn btn-danger">
            Delete Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

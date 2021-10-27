import React from "react";
// import { Link } from "react-router-dom";
import BlogCard from "../blogCard/BlogCard";
import "../../index.css";

const HomePage = () => {
  return (
    <div className="notes-list">
      {this.props.blogs.map((blog) => (
        <div key={blog.title}>
          <h1>{blog.title}</h1>
          <h2>{blog.content}</h2>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

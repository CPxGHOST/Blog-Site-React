import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../blogCard/BlogCard";
import "../../index.css";

const HomePage = () => {
  return (
    <div className="notes-list">
      <h1>This is the home page!</h1>
      <BlogCard />
    </div>
  );
};

export default HomePage;

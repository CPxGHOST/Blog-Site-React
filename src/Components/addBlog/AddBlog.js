import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { loadBlogs, saveBlog } from "../../redux/actions/blogAction";
import PropTypes from "prop-types";
import BlogForm from "./BlogForm";
import { newBlog } from "./../../../tools/mockData";

const AddBlog = ({ blogs, loadBlogs, saveBlog, history, ...props }) => {
  const [blog, setBlog] = useState({ ...props.blog });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (blogs.length === 0) {
      loadBlogs().catch((error) => {
        console.log(error);
      });
    } else {
      setBlog({ ...props.blog });
    }
  }, [props.blog]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    console.log(blog);
    event.preventDefault();
    saveBlog(blog).then(() => {
      console.log(blog);
      // history.push("/");
    });
  };

  return (
    <BlogForm
      blog={blog}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

AddBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  blogs: PropTypes.array.isRequired,
  loadBlogs: PropTypes.func.isRequired,
  saveBlog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getBlogById(blogs, id) {
  return blogs.find(blog=> blog.id == id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id ;
  
  const blog =
   id && state.blogs.length > 0 ? getBlogById(state.blogs, id) : newBlog;

  return {
    blog: blog,
    blogs: state.blogs,
  };
}

const mapDispatchToProps = {
  loadBlogs,
  saveBlog,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);

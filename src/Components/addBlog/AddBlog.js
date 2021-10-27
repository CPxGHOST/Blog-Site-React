import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import * as blogActions from "../../redux/actions/blogAction";
import PropTypes from "prop-types";

class AddBlog extends React.Component {
  state = {
    blog: {
      title: "",
      content: "",
      category: "",
    },
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const blog = { ...this.state.blog, [name]: value };
    this.setState({ blog });
    console.log(this.state.blog);
  };

  handleSubmit = (event) => {
    console.log(this.state.blog);
    event.preventDefault();
    this.props.dispatch(blogActions.createBlog(this.state.blog));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.blog.title}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            type="text"
            name="category"
            onChange={this.handleChange}
            value={this.state.blog.category}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="content"
            rows="10"
            cols="200"
            onChange={this.handleChange}
            value={this.state.blog.content}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Save
        </button>
        <NavLink
          to="/"
          exact
          className="btn btn-danger btn-lg"
          style={{ marginLeft: 75 }}>
          All Blogs
        </NavLink>

      </form>
    );
  }
}

AddBlog.propTypes = {
  dispatch: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    blogs: state.blogs,
  };
}

export default connect(mapStateToProps)(AddBlog);

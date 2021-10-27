import React from "react";
import "../../index.css";
import "../blogCard/BlogCard.css";
import { connect } from "react-redux";
import * as blogActions from "../../redux/actions/blogAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class HomePage extends React.Component {
  componentDidMount() {
    const { blogs, actions } = this.props;
    if (blogs.length === 0) {
      actions.loadBlogs().catch((error) => {
        console.log(error);
      });
    }
  }

  handleDeleteBlog = (blog) => {
    toast.success("Blog Deleted");
    this.props.actions.deleteBlog(blog);
  };

  render() {
    return (
      <div className="notes-list">
        {this.props.blogs.map((blog) => (
          <div key={blog.title}>
            <div className="card">
              <h5 className="card-header">{blog.category}</h5>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <div className="buttons">
                  <NavLink to={"add/" + blog.id} className="btn btn-success">
                    Update Blog
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteBlog(blog)}
                  >
                    Delete Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

HomePage.propTypes = {
  blogs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    blogs: state.blogs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBlogs: bindActionCreators(blogActions.loadBlogs, dispatch),
      deleteBlog: bindActionCreators(blogActions.deleteBlog, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

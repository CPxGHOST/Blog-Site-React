import React from "react";
import "../../index.css";
import "../blogCard/BlogCard.css"
import { connect } from "react-redux";
import * as blogActions from "../../redux/actions/blogAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.actions.loadBlogs().catch((error) => {
      console.log(error);
    });
  }

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
    actions: bindActionCreators(blogActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

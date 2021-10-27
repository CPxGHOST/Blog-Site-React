import * as type from "./actionTypes";
import * as blogApi from "./../../api/blogApi";

export function loadBlogsSuccess(blogs) {
  return { type: type.LOAD_BLOG_SUCCESS, blogs };
}

export function updateBlogSuccess(blog) {
  return { type: type.UPDATE_BLOG_SUCCESS, blog };
}

export function createBlogSuccess(blog) {
  return { type: type.CREATE_BLOG_SUCCESS, blog };
}

export function deleteBlogOptimistic(blog) {
  return { type: type.DELETE_BLOG_OPTIMISTIC, blog };
}

export function loadBlogs() {
  return function (dispatch) {
    return blogApi
      .getBlogs()
      .then((blogs) => {
        dispatch(loadBlogsSuccess(blogs));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function saveBlog(blog) {
  return function (dispatch, getState) {
    return blogApi
      .saveBlog(blog)
      .then((savedBlog) => {
        blog.id
          ? dispatch(updateBlogSuccess(savedBlog))
          : dispatch(createBlogSuccess(savedBlog));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteBlog(blog) {
  return function (dispatch) {
    dispatch(deleteBlogOptimistic(blog));
    return blogApi.deleteBlog(blog.id);
  };
}

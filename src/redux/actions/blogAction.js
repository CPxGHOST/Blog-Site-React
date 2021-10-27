import * as type from "./actionTypes";
import * as blogApi from "./../../api/blogApi";

export function createBlog(blog) {
  return { type: type.CREATE_BLOG, blog };
}

export function loadBlogsSuccess(blogs) {
  return { type: type.LOAD_BLOG_SUCCESS, blogs };
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

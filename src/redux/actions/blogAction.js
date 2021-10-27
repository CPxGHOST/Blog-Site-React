import * as type from "./actionTypes";
// import * as blogApi from ''

export function createBlog(blog) {
  return { type: type.CREATE_BLOG, blog };
}

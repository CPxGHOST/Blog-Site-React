import * as type from "./../actions/actionTypes";
import initialState from "./initialState";

export default function blogReducer(state = initialState.blogs, action) {
  switch (action.type) {
    case type.CREATE_BLOG_SUCCESS:
      return [...state, action.blog];
    case type.UPDATE_BLOG_SUCCESS:
      return state.map((blog) => {
        blog.id == action.blog.id ? action.blog : blog;
      });
    case type.LOAD_BLOG_SUCCESS:
      return action.blogs;
    case type.DELETE_BLOG_OPTIMISTIC:
      return state.filter((blog) => blog.id != action.blog.id);
    default:
      return state;
  }
}

import * as type from "./../actions/actionTypes";

export default function blogReducer(state = [], action) {
  switch (action.type) {
    case type.CREATE_BLOG:
      //saves blog to an array
      return [...state, action.blog];
    default:
      return state;
  }
}

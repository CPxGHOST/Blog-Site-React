export default function blogReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_BLOG":
      //saves blog to an array
      return [...state, ...action.blog];
    default:
      return state;
  }
}

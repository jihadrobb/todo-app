const initialState = {
  todos: [],
  todo: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload.todos };
    case "FETCH_TODO":
      return { ...state, todo: action.payload.todo };
    default:
      return state;
  }
};

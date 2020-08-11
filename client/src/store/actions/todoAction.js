const baseUrl = "http://54.169.175.116:3000/todos";

export const fetchTodos = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((todos) => dispatch({ type: "FETCH_TODOS", payload: { todos } }))
      .catch(console.log);
  };
};

export const fetchTodo = (id) => {
  return (dispatch) => {
    fetch(`${baseUrl}/${id}`)
      .then((res) => res.json())
      .then((todo) => dispatch({ type: "FETCH_TODO", payload: { todo } }))
      .catch(console.log);
  };
};

export const addTodo = (newTodo) => {
  return (dispatch) => {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then(() => dispatch(fetchTodos()))
      .catch(console.log);
  };
};

export const editTodo = (id, updatedTodo) => {
  return (dispatch) => {
    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then(() => dispatch(fetchTodos()))
      .catch(console.log);
  };
};

export const deleteTodo = (id) => {
  return (dispatch) =>
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    })
      .then(() => dispatch(fetchTodos()))
      .catch(console.log);
};


const initialValues = [];
const TodoReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "LIST_ALL_TODOS":
      return state;
    case "ADD_TO_TODOS":
      return [...state, { ...action.payload }];
    case "DELETE_ALL_TODOS":
      return [];
    default:
      return state;
  }
};

// example of actioncreator to use async/await for ajax
export function syncDeleteAllTodo() {
    return { type: "DELETE_ALL_TODOS" };
  }
  export function syncAddToDo(todo) {
    return { type: "ADD_TO_TODOS", payload: { name: todo } };
  }
  
  export function asyncAddTodo() {
    return async dispatch => {
      // async ajax sample using fetch
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json =>
          dispatch({ type: "ADD_TO_TODOS", payload: { name: json.title } })
        );
    };
  }
  
  export default TodoReducer;
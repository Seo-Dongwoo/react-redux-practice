// 액션 타입 작성
const ADD = "todos/ADD";
const DELETE = "todos/DELETE";
const UPDATE = "todos/UPDATE";

// 액션 함수 생성

const addToDo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: new Date().getTime().toString(),
      text: todo.text,
    },
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const updateToDo = (todo) => {
  return {
    type: UPDATE,
    todo: todo,
  };
};

// 초기 상태
const initialState = {
  todos: [],
};

// 리듀서
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.todo],
      };
    case UPDATE:
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === action.todo.id) {
          return { ...todo, text: action.todo.updateTask };
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodos,
      };
    case DELETE:
      const newList = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newList,
      };
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo,
  updateToDo,
};

export default todosReducer;

// 액션 타입 작성
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const UPDATE_TODO = "todos/UPDATE_TODO";
const COMPLETE_TODO = "todos/COMPLETE_TODO";

// 액션 함수 생성
const addToDo = (todo) => {
  return {
    type: ADD_TODO,
    todo: {
      id: new Date().getTime().toString(),
      text: todo.text,
      completed: false,
    },
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const updateToDo = (todo) => {
  return {
    type: UPDATE_TODO,
    todo: todo,
  };
};

const completeTodo = (todo) => {
  return {
    type: COMPLETE_TODO,
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
    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo],
      };
    case UPDATE_TODO:
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
    case DELETE_TODO:
      const newList = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newList,
      };
    case COMPLETE_TODO:
      const completedTodos = state.todos.map((todo) =>
        todo.id === action.todo.id
          ? {
              ...todo,
              completed: !action.todo.completed,
            }
          : todo
      );
      return {
        ...state,
        todos: completedTodos,
      };
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo,
  updateToDo,
  completeTodo,
};

export default todosReducer;

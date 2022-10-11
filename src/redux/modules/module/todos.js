// 액션 타입 작성
const ADD = "todos/ADD";
const DELETE = "todos/DELETE";

// 액션 함수 생성
let nextId = 1;
const addToDo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: nextId++,
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
    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default todosReducer;

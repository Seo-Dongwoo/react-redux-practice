import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        id: new Date().getTime().toString(),
        text: action.payload,
        completed: false,
      });
    },

    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),

    update: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.updateTask;
        }
      });
    },

    completed: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !action.payload.completed;
        }
      });
    },
  },
});

export const { add, remove, update, completed } = todosSlice.actions;

export default todosSlice.reducer;

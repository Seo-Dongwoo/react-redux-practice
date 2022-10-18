import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";

interface Todos {
  id: string;
  text: string;
  completed: boolean;
}

export const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todos[],
  reducers: {
    add: {
      reducer: (state, { payload }: PayloadAction<Todos>) => {
        state.push(payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: uuid(),
            text,
            completed: false,
          },
        };
      },
    },

    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    update: (
      state,
      { payload }: PayloadAction<{ id: string; updateTask: string }>
    ) => {
      const todoToEdit = state.find((todo) => todo.id === payload.id);
      if (todoToEdit) {
        todoToEdit.text = payload.updateTask;
      }
    },

    completed: (
      state,
      { payload }: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      state.map((todo) => {
        if (todo.id === payload.id) {
          todo.completed = !payload.completed;
        }
      });
    },
  },
});

export const { add, remove, update, completed } = todosSlice.actions;

export default todosSlice.reducer;

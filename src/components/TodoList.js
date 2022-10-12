import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { actionCreators } from "../redux/modules/module/todos";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const update = (id, updateTask) => {
    dispatch(actionCreators.updateToDo({ id, updateTask }));
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} update={update} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

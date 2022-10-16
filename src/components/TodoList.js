import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { update, completed } from "../redux/modules/module/todos";
import styled from "styled-components";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const updateTodo = (id, updateTask) => {
    dispatch(update({ id, updateTask }));
  };

  return (
    <List>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            updateTodo={updateTodo}
            completed={todo.completed}
            handleCompleted={() => dispatch(completed(todo))}
          />
        ))}
      </ul>
    </List>
  );
};

const List = styled.div`
  width: 400px;
`;

export default TodoList;

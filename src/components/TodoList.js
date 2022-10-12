import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { actionCreators } from "../redux/modules/module/todos";
import styled from "styled-components";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const update = (id, updateTask) => {
    dispatch(actionCreators.updateToDo({ id, updateTask }));
  };

  return (
    <List>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            update={update}
            completed={todo.completed}
            handleCompleted={() => dispatch(actionCreators.completeTodo(todo))}
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

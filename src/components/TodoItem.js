import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/modules/module/todos.ts";
import styled from "styled-components";
import "../App.css";

const TodoItem = ({ todo, updateTodo, handleCompleted }) => {
  const [editable, setEditable] = useState(false);
  const [editName, setEditName] = useState(todo.text);

  const dispatch = useDispatch();

  const deleteClick = () => {
    dispatch(remove(todo.id));
  };

  const editClick = () => {
    setEditable(!editable);
  };

  const onChange = (e) => {
    setEditName(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    updateTodo(todo.id, editName);
  };

  return (
    <Container onSubmit={handleUpdate}>
      <CheckCircle
        type="checkbox"
        className={todo.completed ? "red" : "green"}
        onClick={handleCompleted}
      />
      {editable ? (
        <TodoInput type="text" value={editName} onChange={onChange} />
      ) : (
        <Todo className={todo.completed ? "done" : "undone"}>
          <TodoText className="todo">{todo.text}</TodoText>
        </Todo>
      )}
      <StateBtn>
        <UpdateButton onClick={editClick}>
          {editable ? "업데이트" : "수정"}
        </UpdateButton>
        <DeleteButton onClick={deleteClick}>삭제</DeleteButton>
      </StateBtn>
    </Container>
  );
};

const Container = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckCircle = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Todo = styled.div``;

const TodoInput = styled.input``;

const TodoText = styled.h4``;

const StateBtn = styled.div``;

const UpdateButton = styled.button`
  color: blue;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
  margin: 5px 10px;
`;

const DeleteButton = styled.button`
  color: red;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
`;

export default TodoItem;

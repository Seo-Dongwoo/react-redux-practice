import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/module/todos";
import styled, { css } from "styled-components";
import "../App.css";

const TodoItem = ({ todo, update, handleCompleted }) => {
  const [editable, setEditable] = useState(false);
  const [editName, setEditName] = useState(todo.text);

  const dispatch = useDispatch();

  const deleteClick = () => {
    dispatch(actionCreators.deleteToDo(todo.id));
  };

  const editClick = () => {
    setEditable(!editable);
  };

  const onChange = (e) => {
    setEditName(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    update(todo.id, editName);
  };

  return (
    <Container onSubmit={handleUpdate}>
      <CheckCircle
        className={todo.completed ? "red" : "green"}
        onClick={handleCompleted}
      />
      {editable ? (
        <input type="text" value={editName} onChange={onChange} />
      ) : (
        <Todo className={todo.completed ? "done" : "undone"}>
          <h4 className="todo">{todo.text}</h4>
        </Todo>
      )}
      <div>
        <UpdateButton onClick={editClick}>
          {editable ? "업데이트" : "수정"}
        </UpdateButton>
        <DeleteButton onClick={deleteClick}>삭제</DeleteButton>
      </div>
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

const CheckCircle = styled.div`
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

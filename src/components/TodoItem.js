import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/module/todos";
import styled from "styled-components";

const TodoItem = ({ todo, update }) => {
  const [editable, setEditable] = useState(false);
  const [editName, setEditName] = useState(todo.text);
  const dispatch = useDispatch();

  console.log(todo.text);

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
      {editable ? (
        <input type="text" value={editName} onChange={onChange} />
      ) : (
        <h4>{todo.text}</h4>
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

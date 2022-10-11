import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/module/todos";
import styled from "styled-components";

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, text } = todo;

  const deleteClick = () => {
    dispatch(actionCreators.deleteToDo(id));
  };

  return (
    <TextColumn>
      <Span>
        ({id}) {text}
      </Span>
      <Button onClick={deleteClick}>삭제</Button>
    </TextColumn>
  );
};

const TextColumn = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  margin: 0 8px;
`;

const Button = styled.button`
  color: red;
  border: none;
  background: white;
  font-size: 1rem;
  cursor: pointer;
`;

export default ToDo;

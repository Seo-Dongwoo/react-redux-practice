import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/module/todos";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const todo = {
      text: text,
    };
    dispatch(actionCreators.addToDo(todo));
    setText("");
  }

  return (
    <Container>
      <Wrapper>
        <h1>Redux TodoList</h1>
        <form onSubmit={onSubmit}>
          <InputBox type="text" value={text} onChange={onChange} />
          <Button>추가</Button>
        </form>
        <TodoList todos={todos} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e9ecef;
  input {
    appearance: none;
    outline-style: none;
    border: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;
`;

const InputBox = styled.input`
  width: 295px;
  height: 40px;
  margin: 10px 5px;

  border-radius: 15px;
  font-size: 1.2rem;

  background: white;
  padding: 5px 25px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
`;

const Button = styled.button`
  width: 100px;
  height: 50px;

  font-size: 1.2rem;

  background: white;

  border: none;
  border-radius: 15px;

  color: #20c997;

  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);

  cursor: pointer;
`;

export default Home;

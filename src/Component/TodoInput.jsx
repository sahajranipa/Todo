import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import EditTodo from "./EditTodo";
import { useDispatch, useSelector } from "react-redux";
import { addTodoInitiate } from "../redux/todoapp/actions";

const TodoInput = ({ updatedValue }) => {
  const [todoInput, setTodoInput] = useState("");

  const editTodo = useSelector((state) => state.TodoApp.editTodo);

  const dispatch = useDispatch();

  const addTodo = async (event) => {
    event.preventDefault();
    dispatch(addTodoInitiate(todoInput));
    setTodoInput("");
  };
  return (
    <>
      {editTodo ? (
        <EditTodo updatedValue={updatedValue} />
      ) : (
        <>
          <TextField
            style={{ maxWidth: "400px", width: "90vw" }}
            id="standard-basic"
            label="Enter Your Todos...."
            variant="standard"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            disabled={!todoInput}
            onClick={addTodo}
            size="small"
            variant="contained"
            sx={{ marginTop: 1 }}
          >
            Add Todos
          </Button>
        </>
      )}
    </>
  );
};

export default TodoInput;

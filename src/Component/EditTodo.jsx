import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/todoapp/actions";
import { EDIT_ITEM } from "../redux/actionTypes";

const EditTodo = ({ updatedValue }) => {
  const [updateInput, setUpdateInput] = useState("");
  const dispatch = useDispatch();

  const updateTodoHandler = (event) => {
    event.preventDefault();
    dispatch(editTodo(updateInput, updatedValue.id));
    setUpdateInput("");
  };
  return (
    <>
      <TextField
        style={{ maxWidth: "400px", width: "90vw" }}
        id="standard-basic"
        variant="standard"
        value={updateInput}
        placeholder={updatedValue.todo}
        onChange={(e) => setUpdateInput(e.target.value)}
      />
      <Button
        size="small"
        variant="contained"
        onClick={updateTodoHandler}
        disabled={!updateInput}
        sx={{ marginRight: 1 }}
      >
        Update
      </Button>
      <Button
        size="small"
        variant="contained"
        onClick={() => dispatch({ type: EDIT_ITEM, payload: false })}
      >
        Cancel
      </Button>
    </>
  );
};

export default EditTodo;

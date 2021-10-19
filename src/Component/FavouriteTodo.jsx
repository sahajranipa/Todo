import { ListItem, ListItemText } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getAllItem, favouriteTodo } from "../redux/todoapp/actions";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const FavouriteTodo = () => {
  const favouritesTodo = useSelector((state) => state.TodoApp.allTodoItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItem());
  }, [dispatch]);

  const favourite = favouritesTodo.filter((item) => item.isFavourite === true);

  const favouriteTodoHandler = (todo) => {
    dispatch(favouriteTodo(todo));
    toast.info("Remove from favourite todo");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {favourite.length === 0 && "No data Found "}
        {favourite.map((todo) => {
          return (
            <div style={{ display: "flex" }} key={todo.id}>
              <ListItem>
                <ListItemText primary={todo.todo} />
              </ListItem>
              <FavoriteBorderIcon
                onClick={() => favouriteTodoHandler(todo)}
                sx={{ color: "#8e24aa", marginTop: 1, marginRight: 1 }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FavouriteTodo;

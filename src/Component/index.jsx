import { ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  favouriteTodo,
  getAllItem,
} from "../redux/todoapp/actions";
import { EDIT_ITEM } from "../redux/actionTypes";
import Navbar from "./Navbar";
// import { toast } from "react-toastify";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState({
    id: null,
    todo: "",
    isFavourite: "",
  });
  const dispatch = useDispatch();
  const todoValue = useSelector((state) => state.TodoApp.allTodoItem);

  useEffect(() => {
    const getAllItems = () => {
      dispatch(getAllItem());
      setIsLoading(false);
      // setTimeout(() => {
      // }, [2000]);
    };
    getAllItems();
  }, [dispatch]);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading.....</p>
  //     </section>
  //   );
  // }

  const editHandler = (todo) => {
    setCurrentValue({
      id: todo.id,
      todo: todo.todo,
      isFavourite: todo.isFavourite,
    });
    dispatch({
      type: EDIT_ITEM,
      payload: true,
    });
  };

  const favouriteHandler = (todo) => {
    dispatch(favouriteTodo(todo));
    // toast.info("Added to favourite todo");
  };

  const deleteHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <form>
            <TodoInput updatedValue={currentValue} />
          </form>
          {isLoading && (
            <p style={{ textAlign: "center", color: "black" }}>Loading....</p>
          )}
          {todoValue.map((todo) => {
            return (
              <div style={{ display: "flex" }} key={todo.id}>
                <ListItem>
                  <ListItemText primary={todo.todo} />
                </ListItem>
                <FavoriteBorderIcon
                  onClick={() => favouriteHandler(todo)}
                  sx={{
                    ...(todo.isFavourite === false
                      ? { color: "#8e24aa" }
                      : "#ff3333"),
                    marginTop: 1,
                    marginRight: 1,
                  }}
                  // sx={{ color: "#8e24aa", marginTop: 1, marginRight: 1 }}
                />
                <DeleteForeverIcon
                  onClick={() => deleteHandler(todo.id)}
                  sx={{ color: red[500], marginTop: 1 }}
                />
                <EditIcon
                  onClick={() => editHandler(todo)}
                  sx={{ color: "#2196f3", marginTop: 1, marginLeft: 1 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

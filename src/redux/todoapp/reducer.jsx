import {
  ADD_NEW_ITEM,
  EDIT_ITEM,
  FAVOURITE_ITEM,
  GET_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
} from "../actionTypes";
import { toast } from "react-toastify";

const INTIAL_STATE = {
  allTodoItem: [],
  editTodo: false,
};

const TodoApp = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      toast.success("Added a task");
      return state;
    }
    case GET_ITEM:
      return {
        ...state,
        allTodoItem: action.payload,
      };

    case UPDATE_ITEM:
      toast.info("Updated successfully");
      return { ...state, editTodo: false };

    case EDIT_ITEM:
      return { ...state, editTodo: action.payload };

    case FAVOURITE_ITEM: {
      toast.info("Added to favourite todo");
      return { ...state, editTodo: action.payload };
    }
    case REMOVE_ITEM: {
      toast.warn("A task was removed...");
      return state;
    }

    default:
      return state;
  }
};

export default TodoApp;

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../../firebaseConfig";
import {
  ADD_NEW_ITEM,
  GET_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  FAVOURITE_ITEM,
} from "../actionTypes";

export const addNewTodo = () => ({
  type: ADD_NEW_ITEM,
});

export const removeTodo = () => ({
  type: REMOVE_ITEM,
  //   payload: todoId,
});

export const updateTodo = () => ({
  type: UPDATE_ITEM,
});

export const favouriteItem = () => ({
  type: FAVOURITE_ITEM,
});

export const getItem = (todoArray) => ({
  type: GET_ITEM,
  payload: todoArray,
});

export const deleteTodo = (id) => (dispatch) => {
  deleteDoc(doc(db, "todo", id));
  dispatch(removeTodo());
};

export const getAllItem = () => (dispatch) => {
  const q = query(collection(db, "todo"));
  onSnapshot(q, (querySnapshot) => {
    let todoArray = [];
    querySnapshot.forEach((doc) => {
      todoArray.push({ ...doc.data(), id: doc.id });
    });
    dispatch(getItem(todoArray));
  });
};

export const addTodoInitiate = (todoInput) => {
  return function (dispatch) {
    addDoc(collection(db, "todo"), {
      isFavourite: false,
      timestamp: serverTimestamp(),
      todo: todoInput,
    });
    dispatch(addNewTodo());
  };
};

export const editTodo = (updateInput, updatedValue) => (dispatch) => {
  updateDoc(doc(db, "todo", updatedValue), {
    isFavourite: false,
    timestamp: serverTimestamp(),
    todo: updateInput,
  });
  dispatch(updateTodo());
};

export const favouriteTodo = (todo) => (dispatch) => {
  updateDoc(doc(db, "todo", todo.id), {
    isFavourite: !todo.isFavourite,
  });
  // dispatch(favouriteItem());
};

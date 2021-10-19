import { combineReducers } from "redux";
import TodoApp from "./todoapp/reducer";

const reducers = combineReducers({ TodoApp });

export default reducers;

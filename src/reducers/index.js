import { createStore, applyMiddleware, combineReducers } from "redux";
import todoReducer from "./TodoReducer";
import thunkMiddleware from "redux-thunk";

const middleWare = applyMiddleware(thunkMiddleware);

export const Store = createStore(todoReducer, middleWare);
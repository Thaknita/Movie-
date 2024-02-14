
import { combineReducers } from "redux";
import { moviesReducer } from "./movieReducer";

export const rootReducer = combineReducers({
    nowplayingR : moviesReducer,
    pathR: moviesReducer,
})
import { combineReducers } from "redux";
import {
	reducer,
	reducerTotal,
	reducerToday,
	reducerCategory,
} from "./expenses";
import authReducer from "./auth";

export default combineReducers({
	reducer,
	reducerTotal,
	reducerToday,
	reducerCategory,
	authReducer 
});

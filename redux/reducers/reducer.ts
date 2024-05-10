import { combineReducers } from "redux";
import auth from "../actions/auth";
import post from "../actions/post";

const rootReducer = combineReducers({ auth: auth, post: post });

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import postReducer from './product'
// import addPostReducer from './addPost'



const reducer = combineReducers({
    post: postReducer,
    // addpost: addPostReducer,
    
});

export default configureStore({reducer})
import { combineReducers } from 'redux';  //他能合并
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer

})
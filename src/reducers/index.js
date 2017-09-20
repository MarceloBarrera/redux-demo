//this a "Root reducer" but file name is call index.js
import {combineReducers} from 'redux';
import courses from './courseReducer';//not cool to call it coursesReducer because this will be reference later on
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,// this could be also courses: courses but again name convention call short hand property name on ES6
  authors,
  ajaxCallsInProgress
});

export default rootReducer;

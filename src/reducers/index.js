import {combineReducers} from 'redux';
import courses from './courseReducer';
const rootReducer = combineReducers({
  courses //short hand property name on ES6
});

export default rootReducer;
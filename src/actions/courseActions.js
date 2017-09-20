import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi'; //if we if we want real api we can change only this line
import {beginAjaxCall} from './ajaxStatusActions';

export function createCourse(course){
  //debugger step 1 from the react-redux flow
  return {type: types.CREATE_COURSE, course};
  //return {type: types.CREATE_COURSE, course: course}; this also works but on ES6 is simpler by naming convention
}
export function loadCoursesSuccess(courses){
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}
//this is our thunk API call, returns a fuction actions
export function loadCourses(){
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses=> {
      dispatch(loadCoursesSuccess(courses));
    }).catch(
      error=>{
        throw(error);
      });
  };
}
//getState could be use for accesing redux store
export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}

import * as types from './actionTypes'

export function createCourse(course){
  //debugger step 1
  return {type: types.CREATE_COURSE, course};
}

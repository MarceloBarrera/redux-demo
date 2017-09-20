import * as types from '../actions/actionTypes';
import initialState from './initialState';

//it is handling an array of courses for testing purposes
export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    //we should not mutate state like example below! better return new objecr so use spread operator for that
    // case "CREATE_COURSE":
    //   state.push(action.course);
    //   return state;
    case types.CREATE_COURSE:
    //debugger; step 2 from the react-redux flow
      return [...state, // ...state returns a new instance of state array
        Object.assign({}, action.course)//object assign will create deep copy of action.course and both operations will make a new array
                                        // all this to return new state!
        ];
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }

}

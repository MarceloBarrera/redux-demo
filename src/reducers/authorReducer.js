import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function authorReducer(state = initialState.authors, action){
  switch(action.type){
    case types.CREATE_COURSE:
      //debugger; step 2
      return [...state,
        Object.assign({}, action.course)//spread operator to retunr new state
      ];
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }

}

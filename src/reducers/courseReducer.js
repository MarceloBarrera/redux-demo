import * as types from '../actions/actionTypes'

export default function courseReducer(state = [], action){
  switch(action.type){
    case types.CREATE_COURSE:
    //debugger; step 2
      return [...state,
        Object.assign({}, action.course)//spread operator to retunr new state
        ];

    default:
      return state;
  }

}

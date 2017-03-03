import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function boardReducer(state = initialState.board, action) {
  console.log("En reducer squareReducer", action, state);
  switch (action.type) {
    case types.SQUARE_CLICK:
      let newState = Object.assign({}, state, action.payload);
      console.log("newState", newState);
      return newState;
    default:
      return state;
  }
}

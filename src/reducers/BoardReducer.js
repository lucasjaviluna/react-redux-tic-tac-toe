import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function boardReducer(state = initialState.playerTurn, action) {
  console.log("En reducer boardReducer", action, state);
  switch (action.type) {
    case types.PLAYER_TURN:
      let playerTurn = (state === 1) ? 2 : 1;
      let newState = Object.assign({}, state, {playerTurn: playerTurn});
      return newState;
    default:
      return state;
  }
}

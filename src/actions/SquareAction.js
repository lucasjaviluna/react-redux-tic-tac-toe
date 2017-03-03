import * as types from './actionTypes';

export function squareClick(data) {
  console.log("En squareClick", data);
  return {
    type: types.SQUARE_CLICK,
    payload: data
  };
}

import {combineReducers} from 'redux';
import board from './SquareReducer';
//import playerTurn from './BoardReducer';

const rootReducer = combineReducers({
  board
  //playerTurn
});

export default rootReducer;

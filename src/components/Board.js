import React, {PropTypes, Component} from 'react';
// import Square from './Square';
import {connect} from 'react-redux';
import uuid from 'uuid';
import * as squareActions from '../actions/SquareAction';
import {bindActionCreators} from 'redux';

import './Board.css';
import './Square.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.board = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(props.board[i][j]);
      }
      this.board.push(row);
    }
    console.log("BoardConstructor: ", this.board);

    this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   jugadas: []
    // };
  }

  handleClick(event) {
    const [ x, y ] = event.target.dataset.cell.split('_');
    console.log("Guardar en ", x, y, this.props.playerTurn);
    console.log(event.target.dataset);
    // let data = {
    //   jugadas: this.props.jugadas,
    //   row: this.props.id,
    //   target: event.target.value
    // };
    let turnIcon = this.props.playerTurn === 1 ? 'X' : 'O';
    this.board[x][y] = turnIcon;
    this.setState({
      value: turnIcon
    });
    this.props.actions.squareClick(this.board);
  }

  createSquare(row, col) {
    const coords = `${row}_${col}`;
    return (
      <button key={uuid.v4()} className="Square-button" onClick={this.handleClick} data-cell={coords}>
        {this.board[row][col]}
      </button>
      // <Square key={uuid.v4()} value={this.props.jugadas[row][col]} row={row} col={col}/>
    );
  }

  render() {
    //let jugadas = this.props.jugadas;
    console.log(this.props.jugadas);
    let rowsSquare = [];
    for (let i = 0; i<=2; i++) {
      for (let j = 0; j<=2; j++) {
        rowsSquare.push(this.createSquare(i, j));
      }
    }
    console.log(rowsSquare, rowsSquare.length);

    return (
      <div className="Board">
        {/* <div><Square jugadas={jugadas[0]} id={0}/></div>
        <div><Square jugadas={jugadas[1]} id={1}/></div>
        <div><Square jugadas={jugadas[2]} id={2}/></div> */}
        {rowsSquare}
      </div>
    );
  }
}

Board.propTypes = {
  //jugadas: PropTypes.object.isRequired,
  playerTurn: PropTypes.number,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {
    board: state.board,
    playerTurn: state.playerTurn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(squareActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);

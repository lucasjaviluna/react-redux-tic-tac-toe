// import React, {PropTypes} from 'react';
// //import uuid from 'uuid';
// import * as squareActions from '../actions/SquareAction';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
//
// import './Square.css';
//
// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.board = [];
//     // for (let i = 0; i<=2; i++) {
//     //   for (let j = 0; j<=2; j++) {
//     //     this.board[i][j] = this.props.jugadas[i][j];
//     //   }
//     // }
//
//     for (let i = 0; i < 3; i++) {
//       let row = [];
//       for (let j = 0; j < 3; j++) {
//         row.push(this.props.jugadas[i][j]);
//       }
//       this.board.push(row);
//     }
//     console.log("BoardConstructor: ", this.board);
//     this.state = {
//       value: this.props.value,
//       //movimientos: rowsSquare
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick(event) {
//     console.log("Guardar en ", this.props.row, this.props.col, this.props.playerTurn);
//     // let data = {
//     //   jugadas: this.props.jugadas,
//     //   row: this.props.id,
//     //   target: event.target.value
//     // };
//     let turnIcon = this.props.playerTurn === 1 ? 'X' : 'O';
//     this.setState({
//       value: turnIcon
//     });
//
//     let jugadas = Object.assign({}, this.props.jugadas);
//
//     this.board[this.props.row][this.props.col] = turnIcon;
//     console.log("board: ",this.board);
//     this.props.actions.squareClick(this.board);
//   }
//
//   render() {
//     return (
//       <div className="Square">
//         <button className="Square-button" onClick={this.handleClick}>
//           {this.state.value}
//         </button>
//       </div>
//     );
//   }
// }
//
// Square.propTypes = {
//   actions: PropTypes.object,
//   row: PropTypes.number.isRequired,
//   col: PropTypes.number.isRequired,
//   playerTurn: PropTypes.number
// };
//
// function mapStateToProps(state) {
//   return {
//     jugadas: state.jugadas,
//     playerTurn: state.playerTurn
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(squareActions, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Square);

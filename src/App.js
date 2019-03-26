import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Square extends Component {
 
  render() {
    return (
      <button className="square" onClick={()=>this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      toggleBoolean: true,
    }
  }

  handleClick= (i) => {
    
    let newSquareArray= this.state.squares.slice();
    newSquareArray[i]= this.state.toggleBoolean ? "X" : "O";
    this.setState({
      squares: newSquareArray,
      toggleBoolean: !this.state.toggleBoolean
    })
    }

   
  
 
  renderSquare(i) {
    return <Square value={this.state.squares[i]} 
    onClick={() => this.handleClick(i)}/>
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



export default Game;

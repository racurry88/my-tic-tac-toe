import React from 'react';

import Board from '../../components/board'

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        location: "",
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { stepNumber, xIsNext, history: fullHistory } = this.state;
    const history = fullHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let location = getLocation(i);

    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
        history: history.concat([{
          squares,
          location,
        }]),
        stepNumber: history.length,
        xIsNext: !xIsNext,
    });
  }

  jumpTo(stepNumber) {
    this.setState({
      stepNumber,
      xIsNext: (stepNumber % 2) === 0,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const { squares: currentSquares } = history[stepNumber];
    const winner = calculateWinner(currentSquares);

    const moves = history.map((step, move) => {
        const desc = move
          ? `Go to the move #${move} at ${step.location}`
          : 'Go to game start';
        const isActive = move === stepNumber ? 'active' : null;
        return (
          <li key={move}>
            <button
              data-testid={`move${move}`}
              onClick={() => this.jumpTo(move)}
              className={isActive}
            >
              {desc}
            </button>
          </li>
        );
    });

    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div data-testid="game" className="game">
        <div data-testid="gameboard" className="game-board">
          <Board
            squares={currentSquares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div data-testid="gameinfo" className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function getLocation(square){
  return [
    "(1,1)", "(1,2)", "(1,3)",
    "(2,1)", "(2,2)", "(2,3)",
    "(3,1)", "(3,2)", "(3,3)",
  ][square];
}

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

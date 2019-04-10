import React from 'react';

import Square from '../../components/square'

const cells = [0,1,2];

export default function Board({ squares, onClick, winningLine, ...props }) {
  winningLine = winningLine ? winningLine : [];
  return (
    <div data-testid="board" {...props}>
      {cells.map((row) => (
        <div key={row} className="board-row">
          {cells.map((col) => (
            <Square
              key={col}
              data-testid={`cell${3 * row + col}`}
              value={squares[3 * row + col]}
              onClick={() => onClick(3 * row + col)}
              winningCell={winningLine.includes(3 * row + col) ? 'winningCell' : null}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

import React from 'react';

import Square from '../../components/square'

const cells = [0,1,2];

export default function Board({ squares, onClick }) {
  return (
    <div>
      {cells.map((row) => (
        <div className="board-row">
          {cells.map((col) => (
            <Square
              value={squares[3 * row + col]}
              onClick={() => onClick(3 * row + col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

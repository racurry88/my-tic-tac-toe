import React from 'react';

import Square from '../../components/square'

const cells = [0,1,2];

export default function Board(props) {
  return (
    <div>
      {cells.map((row) => (
        <div className="board-row">
          {cells.map((col) => (
            <Square
              value={props.squares[3 * row + col]}
              onClick={() => props.onClick(3 * row + col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

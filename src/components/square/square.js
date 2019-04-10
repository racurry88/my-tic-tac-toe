import React from 'react';

export default function Square({ onClick, value, winningCell, ...props }) {
  return (
    <button data-testid="square" {...props} className={`square ${winningCell}`} onClick={onClick}>
      {value}
    </button>
  );
}

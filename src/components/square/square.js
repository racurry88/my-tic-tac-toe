import React from 'react';

export default function Square({ onClick, value, ...props }) {
  return (
    <button data-testid="square" {...props} className="square" onClick={onClick}>
      {value}
    </button>
  );
}

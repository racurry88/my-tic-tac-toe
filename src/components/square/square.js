import React from 'react';

export default function Square({ onClick, value }) {
  return (
    <button className="square" onClick={onClick} data-testid="square">
      {value}
    </button>
  );
}

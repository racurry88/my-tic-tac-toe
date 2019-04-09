import React from 'react';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import { cleanup, render, fireEvent } from 'react-testing-library';

import Board from './board';

chai.use(chaiDom);
afterEach(cleanup);

describe('Components/Board', () => {
  const testSquares = [
    'X','O','X',
    'O','X','O',
    'O','X','O',
  ];

   it('has all the pieces', () => {
     const { getByTestId } = render((
       <Board onClick={() => {}} squares={testSquares} />
     ));

     getByTestId('board');
   });

  it('renders the value in the cell', () => {
    const { getByTestId } = render((
      <Board onClick={() => {}} squares={testSquares} />
    ));

    expect(getByTestId('cell4')).to.contain.text('X');
  });

  it('calls the function when clicked', () => {
    const onClick = jest.fn();

    const { getByTestId } = render((
      <Board onClick={onClick} squares={testSquares} />
    ));

    fireEvent.click(getByTestId('cell4'));

    expect(onClick.mock.calls).to.deep.equal([ [ 4 ] ]);
  });
});

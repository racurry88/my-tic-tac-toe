import React from 'react';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import { cleanup, render, fireEvent } from 'react-testing-library';

import Game, { calculateWinner } from './game';

chai.use(chaiDom);
afterEach(cleanup);

describe('Components/Game', () => {
  it('has all the pieces', () => {
    const { getByTestId } = render((
      <Game />
    ));

    getByTestId('game');
    getByTestId('gameboard');
    getByTestId('gameinfo');
  });

  it('plays the game', () => {
    const { getByTestId } = render((
      <Game />
    ));

    expect(getByTestId('board')).to.have.text('');

    expect(getByTestId('gameinfo')).to.include.text('Next player: X');
    fireEvent.click(getByTestId('cell0'));
    expect(getByTestId('cell0')).to.have.text('X');
    expect(getByTestId('board')).to.have.text('X');

    expect(getByTestId('gameinfo')).to.include.text('Next player: O');
    fireEvent.click(getByTestId('cell3'));
    expect(getByTestId('cell3')).to.have.text('O');
    expect(getByTestId('board')).to.have.text('XO');

    expect(getByTestId('gameinfo')).to.include.text('Next player: X');
    fireEvent.click(getByTestId('cell1'));
    expect(getByTestId('cell1')).to.have.text('X');
    expect(getByTestId('board')).to.have.text('XXO');

    expect(getByTestId('gameinfo')).to.include.text('Next player: O');
    fireEvent.click(getByTestId('cell4'));
    expect(getByTestId('cell4')).to.have.text('O');
    expect(getByTestId('board')).to.have.text('XXOO');

    expect(getByTestId('gameinfo')).to.include.text('Next player: X');
    fireEvent.click(getByTestId('cell2'));
    expect(getByTestId('cell2')).to.have.text('X');
    expect(getByTestId('board')).to.have.text('XXXOO');

    expect(getByTestId('gameinfo')).to.include.text('Winner: X');
  });
});

describe('Componenst/Game/calculateWinner', () => {
  it('finds no winner', () => {

    expect(calculateWinner([
      '','','',
      '','','',
      '','','',
    ])).to.equal(null);

    expect(calculateWinner([
      'X','O','X',
      'O','X','O',
      'O','X','O',
    ])).to.equal(null);

    expect(calculateWinner([
      'O','X','O',
      'X','','',
      '','X','X',
    ])).to.equal(null);
  });

  it('finds a winner', () => {
    expect(calculateWinner([
      'X','X','X',
      '','','',
      '','','',
    ])).to.equal('X');

    expect(calculateWinner([
      'O','O','X',
      'O','X','O',
      'O','X','X',
    ])).to.equal('O');

    expect(calculateWinner([
      'X','X','O',
      'X','X','',
      '','X','X',
    ])).to.equal('X');

    expect(calculateWinner([
      'A','','',
      '','A','',
      '','','A',
    ])).to.equal('A');
  });
});

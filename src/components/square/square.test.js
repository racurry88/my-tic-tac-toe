import React from 'react';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import { render, fireEvent } from 'react-testing-library';

import Square from './square';

chai.use(chaiDom);

describe('Components/Square', () => {
  it('renders the value', () => {
    const { getByTestId } = render((
      <Square onClick={() => {}} value="X" />
    ));

    expect(getByTestId('square')).to.contain.text('X');
  });

  xit('calls the function when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render((
      <Square onClick={onClick} value="X" />
    ));

    fireEvent.click(getByTestId('square'));

    expect(onClick.mock.calls).to.have.length(1);
  });
});

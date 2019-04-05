import React from 'react';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';

import { render, fireEvent, cleanup } from 'react-testing-library';


import Square from './square';

chai.use(chaiDom);
afterEach(cleanup);

describe('Components/Square', () => {
  it('renders the value', () => {
    const { getByTestId } = render((
      <Square onClick={() => {}} value="X" />
    ));

    expect(getByTestId('square')).to.contain.text('X');
  });


  it('calls the function when clicked', () => {
    const onClick = jest.fn();
    const buttonClick = { button: 2 }
    const { getByTestId } = render((
      <Square onClick={onClick} value="X" />
    ));

    waitForElement(() => getByTestId('square'));

    fireEvent.submit(getByTestId('square'),buttonClick);

    expect(onClick.mock.calls).to.have.length(1);
  });
});

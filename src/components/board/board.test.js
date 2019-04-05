import React from 'react';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import { render, waitForElement, fireEvent } from 'react-testing-library';

import Board from './board';

chai.use(chaiDom);

describe('Components/Board', () => {
  xit('renders the value', () => {
    const { getByTestId } = render((
      <Board onClick={() => {}} value="X" >
      </Board>
    ));
  });
});

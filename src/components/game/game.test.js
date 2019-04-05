import React from 'react';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import { render, waitForElement, fireEvent } from 'react-testing-library';

import Game from './game';

chai.use(chaiDom);

describe('Components/Board', () => {
  xit('renders the value', () => {
    const { getByTestId } = render((
      <Game onClick={() => {}} value="X" >
      </Game>
    ));
  });
});

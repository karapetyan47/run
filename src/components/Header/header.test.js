import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createRootReducers from '../../store/reducers';

const mockStore = createStore(createRootReducers(history));

const setUp = () => {
  render(
    <Provider store={mockStore}>
      <Header />
    </Provider>,
  );
};

describe('Test', () => {
  beforeAll(() => {
    global.matchMedia =
      global.matchMedia ||
      function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
  });
  it('Header Component', () => {
    setUp();
    expect(screen.getByTestId('header'));
  });
  it('Has Logo in header', () => {
    setUp();
    expect(screen.getByAltText('logo'));
  });
});

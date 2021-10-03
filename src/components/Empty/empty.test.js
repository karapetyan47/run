import React from 'react';
import { render, screen } from '@testing-library/react';
import Empty from '.';

const setUp = () => {
  render(<Empty />);
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
  it('Empty Component', () => {
    setUp();
    expect(screen.getByTestId('empty'));
  });
  it('Has Logo in empty component', () => {
    setUp();
    expect(screen.getByAltText('empty'));
  });
});

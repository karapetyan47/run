import React from 'react';
import { render, screen } from '@testing-library/react';
import JogItem from '.';
import moment from 'moment';

const date = Date.now();

const setUp = () => {
  render(<JogItem date={date} time="222" distance="123" speed="12" />);
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
  it('JogItem Component', () => {
    setUp();
    expect(screen.getByTestId('jog'));
  });
  it('Has data', () => {
    setUp();
    expect(screen.getByText(moment(date).format('DD.MM.YYYY')));
    expect(screen.getByText('222 min'));
    expect(screen.getByText('123 km'));
    expect(screen.getByText('12'));
  });
});

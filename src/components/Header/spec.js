import React from 'react';
import { render, shallow } from 'enzyme';
import Header from './index';
import ReduxProvider from '../../store/forTesting/ReduxProvider';

describe('Header Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <ReduxProvider>
        <Header />
      </ReduxProvider>,
    );
    const header = component.find('.header');
    expect(header.length).toBe(1);
  });

  it('Should render a logo', () => {
    const component = shallow(
      <ReduxProvider>
        <Header />
      </ReduxProvider>,
    );

    const logo = component.find('.logo-image');
    expect(logo.length).toBe(1);
  });
});

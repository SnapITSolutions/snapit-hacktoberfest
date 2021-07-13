import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  const setup = () => shallow(<App />);

  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });
});

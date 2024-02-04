import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('test Login', () => {
  it('renders without crashing', () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });

  it('renders 2 input 2 labels', () => {
    const login = shallow(<Login />);
    expect(login.find('input')).toHaveLength(2);
    expect(login.find('label')).toHaveLength(2);
  });
});

import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('test Header', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });

  it('renders h1', () => {
    const header = shallow(<Header />);
    expect(header.find('h1')).toBeDefined();
  });

  it('renders img', () => {
    const header = shallow(<Header />);
    expect(header.find('img')).toBeDefined();
  });
});

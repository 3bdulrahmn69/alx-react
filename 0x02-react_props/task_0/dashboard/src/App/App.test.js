import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('test App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});

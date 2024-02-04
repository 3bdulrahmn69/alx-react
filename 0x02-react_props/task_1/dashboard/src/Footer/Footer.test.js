import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('test Footer', () => {
  it('renders without crashing', () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined();
  });

  it('render text Copyright', () => {
    const footer = shallow(<Footer />);
    expect(footer.text()).toEqual('Copyright');
  });
});

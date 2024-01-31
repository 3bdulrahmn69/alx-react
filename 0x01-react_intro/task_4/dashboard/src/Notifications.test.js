import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('test Notifications', () => {
  it('renders without crashing', () => {
    const Notification = shallow(<Notifications />);
    expect(Notification).toBeDefined();
  });

  it('renders ul', () => {
    const notification = shallow(<Notifications />);
    expect(notification.find('ul')).toBeDefined();
  });

  it('renders three list items', () => {
    const notification = shallow(<Notifications />);
    expect(notification.find('li')).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const Notification = shallow(<Notifications />);
    expect(Notification.find('p').text()).toBe(
      'Here is the list of notifications'
    );
  });
});

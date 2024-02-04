import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        onClick={() => {
          console.log('Close button has been clicked');
        }}
        style={{
          position: 'absolute',
          right: '1rem',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume availablssssse" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notifications;

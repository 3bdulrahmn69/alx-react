import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
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
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;

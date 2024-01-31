import React from 'react';
import { createRoot } from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>
      <div id="root-notifications">
        <Notifications />
      </div>
      <App />
    </div>
  </React.StrictMode>
);

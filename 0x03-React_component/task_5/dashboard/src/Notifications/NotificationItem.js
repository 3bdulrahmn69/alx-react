import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.type && this.props.value ? (
          <li
            data-notification-type={this.props.type}
            onClick={() => this.props.markAsRead(this.props.id)}
          >
            {this.props.value}
          </li>
        ) : null}
        {this.props.html ? (
          <li
            data-urgent
            dangerouslySetInnerHTML={{ __html: this.props.html }}
            onClick={() => this.props.markAsRead(this.props.id)}
          ></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  __html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    return;
  },
  id: 0,
};

export default NotificationItem;

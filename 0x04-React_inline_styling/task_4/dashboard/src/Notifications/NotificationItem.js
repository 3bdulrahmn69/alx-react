import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.type && this.props.value ? (
          <li
            className={
              this.props.type === 'default'
                ? css(styles.default)
                : css(styles.urgent)
            }
            data-notification-type={this.props.type}
            onClick={() => this.props.markAsRead(this.props.id)}
          >
            {this.props.value}
          </li>
        ) : null}
        {this.props.html ? (
          <li
            className={
              this.props.type === 'default'
                ? css(styles.default)
                : css(styles.urgent)
            }
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

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    '@media (max-width: 375px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
  urgent: {
    color: 'red',
    '@media (max-width: 375px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
});

export default NotificationItem;

import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(styles['App-body'])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          ></input>
          <input type="submit" value="Ok" disabled={!enableSubmit}></input>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  'App-body': {
    fontSize: '1rem',
    padding: '2em',
    height: '45%',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  input: {
    margin: '10px',
  },
});

export default Login;

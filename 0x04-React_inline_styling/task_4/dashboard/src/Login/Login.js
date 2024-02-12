import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <label htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input
          className={css(styles.input)}
          type="password"
          name="password"
        ></input>
        <button style={{ width: 'fit-content' }}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1rem',
  },
  form: {
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

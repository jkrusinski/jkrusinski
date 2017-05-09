import React from 'react';
import { green300, grey900 } from '../constants/colors.js';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    fontFamily: '\'Open Sans\', sans-serif',
    margin: '20px 0 20px 10px',
    backgroundColor: green300,
    color: grey900
  }
};

const Navigation = () => (
  <div style={styles.container}>
    <button style={styles.button} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">About</button>
    <button style={styles.button} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Blog</button>
    <button style={styles.button} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Resume</button>
  </div>
);

export default Navigation;

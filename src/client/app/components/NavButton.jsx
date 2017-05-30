import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey700, amber700 } from '../constants/colors.js';

const styles = {
  button: {
    display: 'inline-block',
    color: grey700
  },
  active: {
    color: amber700
  }
};

const NavButton = ({ classes, label, icon, active }) => {
  let className = `mdl-button mdl-js-button mdl-js-ripple-effect ${classes.button}`;

  if (active) {
    className += ' ' + classes.active;
  }

  return (
    <button className={ className }>
      <i className="material-icons">{ icon }</i>
      &nbsp;
      { label }
    </button>
  );
};

NavButton.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool
};

export default injectSheet(styles)(NavButton);

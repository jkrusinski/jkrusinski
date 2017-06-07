import React from 'react';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { grey700, amber700, lightBlue500 } from '../constants/colors.js';

const styles = {
  button: {
    display: 'inline-block',
    color: grey700,
    '&:hover, &:focus': {
      color: 'unset',
      outline: 'none'
    },
    '&:active': {
      color: '#fff',
      backgroundColor: lightBlue500
    }
  },
  active: {
    color: '#fff',
    backgroundColor: lightBlue500
  }
};

const NavButton = ({ classes, label, icon, to }) => {
  const className = `mdl-button mdl-js-button mdl-js-ripple-effect ${classes.button}`;
  return (
    <NavLink to={to} className={ className } activeClassName={classes.active}>
      <i className="material-icons">{ icon }</i>&nbsp;{ label }
    </NavLink>
  );
};

NavButton.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string
};

export default injectSheet(styles)(NavButton);

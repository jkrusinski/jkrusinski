import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Color from 'color';
import { grey50 } from '../constants/colors.js';

const styles = {
  chip: {
    backgroundColor: ({ color }) => color,
    marginRight: '15px',
    color: grey50
  },
  icon: {
    backgroundColor: ({ color }) => Color(color).darken(0.5).rgb().string()
  }
};

const Chip = ({ classes, link, text, icon }) => (
  <a href={ link ? link : '#' } className={`mdl-chip mdl-chip--contact ${classes.chip}`}>
    <i className={`mdi mdi-${icon} mdl-chip__contact ${classes.icon}`}></i>
    <span className="mdl-chip__text">{ text }</span>
  </a>
);

Chip.propTypes = {
  classes: PropTypes.object,
  link: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string
};

export default injectSheet(styles)(Chip);

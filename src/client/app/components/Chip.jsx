import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Color from 'color';
import { grey50 } from '../constants/colors.js';

const styles = {
  chip: {
    margin: '5px',
    '&:hover, &:active, &:focus': {
      color: 'inherit',
    }
  }
};

const Chip = ({ classes, link, text, icon }) => (
  <a href={ link ? link : '#' } className={`mdl-chip ${classes.chip}`}>
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

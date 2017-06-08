import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey900 } from '../constants/colors.js';

const styles = {
  card: {
    width: 'unset',
    marginTop: ({ noMargin }) => noMargin ? '0' : '30px',
    height: ({ height }) => height || 200,
    minHeight: 'unset',
    backgroundColor: ({ backgroundColor }) => backgroundColor || '#fff'
  },
  text: {
    width: '100%',
    color: ({ color }) => color || grey900
  },
  title: {
    paddingBottom: '0'
  }
};

const Card = ({ classes, children, title, shadow }) => (
  <div className={`mdl-card mdl-shadow--${shadow || 2}dp ${classes.card}`}>
    { title ? <div className={`mdl-card__title ${classes.title}`}><h2 className="mdl-card__title-text">{ title }</h2></div> : null }
    <div className={`mdl-card__supporting-text ${classes.text}`}>
      { children }
    </div>
  </div>
);

Card.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  shadow: PropTypes.number,
  noMargin: PropTypes.bool
};

export default injectSheet(styles)(Card);

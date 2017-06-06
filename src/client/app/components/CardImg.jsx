import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  card: {
    width: 'unset',
    marginTop: '30px',
    background: ({ img }) => `url(${img}) center /cover`
  },
  footer: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    padding: '16px',
    background: 'rgba(0, 0, 0, 0.4)'
  }
};

const CardImg = ({ classes, title, img }) => (
  <div className={`mdl-card mdl-shadow--2dp ${classes.card}`}>
    <div className="mdl-card__title mdl-card--expand"></div>
    <div className={`mdl-card__actions ${classes.footer}`}>{ title }</div>
  </div>
);

CardImg.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  img: PropTypes.string
};

export default injectSheet(styles)(CardImg);

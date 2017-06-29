import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  card: {
    width: 'unset',
    marginTop: ({ noMargin }) => noMargin ? '0' : '30px',
    background: ({ img, fit }) => `url(${img}) ${fit ? 'no-repeat center / contain' : 'center / cover'}`,
    height: ({ height }) => height || 200,
    minHeight: 'unset'
  },
  footer: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    padding: '16px',
    background: 'rgba(0, 0, 0, 0.4)'
  },
  background: {
    backgroundColor: 'white'
  }
};

const Image = ({ classes, title, noMargin }) => (
  <div className={classes.background}>
    <div className={`mdl-card mdl-shadow--2dp ${classes.card}`}>
      <div className="mdl-card__title mdl-card--expand"></div>
      { title ? <div className={`mdl-card__actions ${classes.footer}`}>{ title }</div> : null }
    </div>
  </div>
);

Image.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  img: PropTypes.string,
  height: PropTypes.string,
  noMargin: PropTypes.bool,
  fit: PropTypes.bool
};

export default injectSheet(styles)(Image);

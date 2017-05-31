import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  card: {
    width: 'unset',
    marginTop: '30px'
  },
  text: {
    width: '100%'
  }
};

const Card = ({ classes, children, title }) => (
  <div className={`mdl-card mdl-shadow--2dp ${classes.card}`}>
    { title ? <div className="mdl-card__title"><h2 className="mdl-card__title-text">{ title }</h2></div> : null }
    <div className={`mdl-card__supporting-text ${classes.text}`}>
      { children }
    </div>
  </div>
);

Card.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string
};

export default injectSheet(styles)(Card);

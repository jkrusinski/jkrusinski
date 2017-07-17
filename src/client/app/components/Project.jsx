import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey100 } from '../constants/colors.js';

const styles = {
  card: {
    width: '100%',
    backgroundColor: grey100,
    marginTop: '15px'
  },
  image: {
    height: '100px',
    background: ({ img }) => `url(${img}) center /cover`
  },
  heading: {
    fontSize: '18px'
  },
  text: {
    paddingTop: 0,
    fontSize: '14px',
    height: '175px',
    overflow: 'scroll'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      textDecoration: 'none'
    }
  }
};

const Project = ({ classes, name, children, github, link }) => (
  <div className={`mdl-card mdl-shadow--2dp ${classes.card}`}>

    <div className={classes.image}></div>

    <div className="mdl-card__title">
      <h2 className={`mdl-card__title-text ${classes.heading}`}>{name}</h2>
    </div>

    <div className={`mdl-card__supporting-text ${classes.text}`}>
      {children}
    </div>

    <div className={`mdl-card__actions mdl-card--border ${classes.actions}`}>
      <a href={github} target="_blank" className="mdl-button mdl-js-ripple-effect mdl-js-button">Code</a>
      {
        link === '#'
          ? <a href={link} disabled={true} className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--colored">Link</a>
          : <a href={link} target="_blank" className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--colored">Link</a>
      }
    </div>

  </div>
);

Project.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  children: PropTypes.node,
  github: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string
};

export default injectSheet(styles)(Project);

import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { green300, grey700, amber700 } from '../constants/colors.js';

const styles = {
  container: {
    borderRadius: '0',
    minHeight: 'unset',
    width: '100%',
    '& > div': {
      width: '100%'
    }
  },
  spacer: {
    maxWidth: '450px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'inline-block',
    color: grey700
  },
  active: {
    color: amber700
  }
};

const Navigation = ({ classes }) => (
  <div className={classes.container + ' mdl-card mdl-shadow--2dp'}>
    <div className={classes.spacer + ' mdl-card__supporting-text'}>
      <button className={classes.buttons + ' ' + classes.active + ' mdl-button mdl-js-button mdl-js-ripple-effect'}>
        <i className="material-icons">info</i>
        &nbsp;
        About
      </button>
      <button className={classes.buttons + ' mdl-button mdl-js-button mdl-js-ripple-effect'}>
        <i className="material-icons">description</i>
        &nbsp;
        Resume
      </button>
      <button className={classes.buttons + ' mdl-button mdl-js-button mdl-js-ripple-effect'}>
        <i className="material-icons">account_circle</i>
        &nbsp;
        Contact
      </button>
    </div>
  </div>
);

Navigation.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Navigation);

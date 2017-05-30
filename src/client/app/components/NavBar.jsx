import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { green300, amber700 } from '../constants/colors.js';

import NavButton from './NavButton.jsx';

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
  }
};

const NavBar = ({ classes }) => (
  <div className={classes.container + ' mdl-card mdl-shadow--2dp'}>
    <div className={classes.spacer + ' mdl-card__supporting-text'}>
      <NavButton label="About" icon="info" active={true} />
      <NavButton label="Resume" icon="description" />
      <NavButton label="Contact" icon="account_circle" />
    </div>
  </div>
);

NavBar.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(NavBar);

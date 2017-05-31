import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey700, grey900 } from '../constants/colors.js';

const styles = {
  footer: {
    width: '100%',
    padding: '30px',
    textAlign: 'center',
    fontSize: '1.3em',
    color: grey700
  },
  link: {
    color: grey700,
    '&:hover, &:active, &:focus': {
      color: grey900
    }
  }
};

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    Jerry R Krusinski Jr &middot; Austin, TX &middot; <a className={classes.link} href="mailto:jkruzr@gmail.com">jkruzr@gmail.com</a>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Footer);

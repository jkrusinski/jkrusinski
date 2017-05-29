import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey50, green500 } from '../constants/colors.js';

const styles = {
  wrapper: {
    backgroundColor: green500,
    overflow: 'auto',
    width: '100%'
  },
  avatar: {
    backgroundImage: 'url("/public/media/avatar.jpg")',
    height: '150px',
    width: '150px',
    backgroundSize: 'cover',
    borderRadius: '50%',
    margin: '30px auto 0 auto'
  },
  name: {
    color: grey50,
    fontFamily: '\'Open Sans\', sans-serif',
    fontSize: '3em',
    textAlign: 'center',
    margin: '20px 0'
  },
  title: {
    color: grey50,
    fontFamily: '\'Open Sans\', sans-serif',
    fontSize: '1.7em',
    textAlign: 'center'
  }
};

const Header = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.avatar}></div>
    <h1 className={classes.name}>Jerry R Krusinski Jr</h1>
    <h3 className={classes.title}>Full Stack Software Engineer</h3>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Header);

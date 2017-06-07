import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Card from './Card.jsx';

const styles = {
  social: {
    fontFamily: '\'Open Sans\', sans serif',
    fontSize: '20px'
  }
};

const Social = ({ classes, backgroundColor, icon, name, link }) => (
  <a href={link}>
    <Card height="50px" color="#fff" backgroundColor={backgroundColor}>
      <span className={classes.social}>
        <i className={`mdi mdi-${icon}`}></i>
        &nbsp;
        {name}
      </span>
    </Card>
  </a>
);

Social.propTypes = {
  classes: PropTypes.object,
  backgroundColor: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string
};

export default injectSheet(styles)(Social);

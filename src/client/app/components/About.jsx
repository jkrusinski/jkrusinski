import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Card from './Card.jsx';

const styles = {
  row: {

  }
};

const About = ({ classes }) => (
  <div className={`row ${classes.row}`}>
    <div className="col-sm-8">
      <Card title="About Me">
        <p>Here is some stuff about me</p>
      </Card>
    </div>
    <div className="col-sm-4">
      <Card title="Links"></Card>
    </div>
  </div>
);

About.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(About);

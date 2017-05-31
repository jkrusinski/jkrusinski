import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Card from './Card.jsx';
import Chip from './Chip.jsx';

const styles = {
  row: {

  }
};

const About = ({ classes }) => (
  <div className={`row ${classes.row}`}>
    <div className="col-sm-7">
      <Card title="About Me">
        <p>Here is some stuff about me</p>
      </Card>
    </div>
    <div className="col-sm-5">
      <Card title="Links">
        <Chip link="https://github.com/jkrusinski" text="GitHub" icon="github-face" color="grey" />
        <Chip link="https://linkedin.com/in/jkrusinski" text="LinkedIn" icon="linkedin-box" color="#85C4E0" />
      </Card>
    </div>
  </div>
);

About.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(About);

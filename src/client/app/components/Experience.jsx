import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { lightBlue50 } from '../constants/colors.js';

import Card from './Card.jsx';
import Image from './Image.jsx';

const styles = {
  headers: {
    marginTop: 0,
    marginBottom: '10px',
    fontWeight: 300
  }
};

const Experience = ({ classes, img, institution, title, start, end, children }) => (
  <Card shadow={4} height="unset" noMargin={true} backgroundColor={lightBlue50}>
    <div className="row">
      <div className="col-sm-3">
        <Image img={img} noMargin={true} shadow={0} />
      </div>
      <div className="col-sm-9">
        <h3 className={classes.headers}>{institution}</h3>
        <h4 className={classes.headers}>{title} <small>{start} - {end}</small></h4>
        <div className={classes.body}>{children}</div>
      </div>
    </div>
  </Card>
);

Experience.propTypes = {
  classes: PropTypes.object,
  img: PropTypes.string,
  institution: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  children: PropTypes.node
};

export default injectSheet(styles)(Experience);

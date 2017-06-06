import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey700, blue500, red500 } from '../constants/colors.js';

import Card from './Card.jsx';
import CardImg from './CardImg.jsx';

const styles = {
  row: {

  }
};

const About = ({ classes }) => {
  const apiKey = 'AIzaSyB1DNpnZ23kq2IpYXYhnD2EV3Hnhbo8jXs';
  const url = `https://maps.googleapis.com/maps/api/staticmap?key=${apiKey}&center=Austin,+Texas&size=600x400&zoom=12`;
  return (
    <div className={`row ${classes.row}`}>
      <div className="col-sm-7">
        <Card title="About Me">
          <p>Here is some stuff about me</p>
        </Card>
      </div>
      <div className="col-sm-5">
        <CardImg title="Location" img={url} />
      </div>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(About);

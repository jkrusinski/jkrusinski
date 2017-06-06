import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey700, blue500, indigo500, cyan500 } from '../constants/colors.js';

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
    <div>
      <div className={`row ${classes.row}`}>
        <div className="col-sm-7">
          <Card title="About Me" height="250px">
            <p>Here is some stuff about me</p>
          </Card>
        </div>
        <div className="col-sm-5">
          <CardImg title="Location" img={url} height="250px" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <Card height="50px" color="#fff" backgroundColor="#007BB6">
            LinkedIn
          </Card>
        </div>
        <div className="col-sm-3">
          <Card height="50px" color="#fff" backgroundColor="#171515">
            GitHub
          </Card>
        </div>
        <div className="col-sm-3">
          <Card height="50px" color="#fff" backgroundColor="#3050A4">
            Facebook
          </Card>
        </div>
        <div className="col-sm-3">
          <Card height="50px" color="#fff" backgroundColor="#42B6E7">
            Twitter
          </Card>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(About);

import React from 'react';
import PropTypes from 'prop-types';
import { grey700, blue500, indigo500, cyan500 } from '../constants/colors.js';

import Card from './Card.jsx';
import Image from './Image.jsx';
import Social from './Social.jsx';

const About = ({ classes }) => {
  const apiKey = 'AIzaSyB1DNpnZ23kq2IpYXYhnD2EV3Hnhbo8jXs';
  const url = `https://maps.googleapis.com/maps/api/staticmap?key=${apiKey}&center=Austin,+Texas&size=600x400&zoom=12`;
  return (
    <div>

      <div className="row">
        <div className="col-sm-7">
          <Card title="About Me" height="250px">
            <p>Here is some stuff about me</p>
          </Card>
        </div>
        <div className="col-sm-5">
          <Image title="Location" img={url} height="250px" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <Social backgroundColor="#007BB6" icon="linkedin-box" name="LinkedIn"/>
        </div>
        <div className="col-sm-3">
          <Social backgroundColor="#171515" icon="github-box" name="GitHub"/>
        </div>
        <div className="col-sm-3">
          <Social backgroundColor="#3050A4" icon="facebook-box" name="Facebook"/>
        </div>
        <div className="col-sm-3">
          <Social backgroundColor="#42B6E7" icon="twitter-box" name="Twitter"/>
        </div>
      </div>

    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object
};

export default About;

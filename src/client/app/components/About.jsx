import React from 'react';
import PropTypes from 'prop-types';
import { grey700, blue500, indigo500, cyan500 } from '../constants/colors.js';

import Card from './Card.jsx';
import Image from './Image.jsx';
import Social from './Social.jsx';
import Project from './Project.jsx';

import { aboutMe, projects, social } from '../data/about.js';

const About = ({ classes }) => {
  const apiKey = 'AIzaSyB1DNpnZ23kq2IpYXYhnD2EV3Hnhbo8jXs';
  const url = `https://maps.googleapis.com/maps/api/staticmap?key=${apiKey}&center=Austin,+Texas&size=600x400&zoom=12`;

  return (
    <div>

      <div className="row">
        <div className="col-sm-7">
          <Card title="About Me" height="250px">
            <p>{aboutMe}</p>
          </Card>
        </div>
        <div className="col-sm-5">
          <Image title="Location" img={url} height="250px" />
        </div>
      </div>

      <Card title="Projects">
        <div className="row">
          {projects.map(({name, img, github, link, description}, index) => (
            <div className="col-sm-4" key={index}>
              <Project name={name} img={img} github={github} link={link}>
                {description}
              </Project>
            </div>
          ))}
        </div>
      </Card>

      <div className="row">
        {social.map(({backgroundColor, icon, name, link}, index) => (
          <div className="col-sm-3" key={index}>
            <Social
              backgroundColor={backgroundColor}
              icon={icon}
              name={name}
              link={link}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object
};

export default About;

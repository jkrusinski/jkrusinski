import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Card from './Card.jsx';
import Chip from './Chip.jsx';
import Experience from './Experience.jsx';

const styles = {
  skills: {
    textAlign: 'center'
  }
};

const Resume = ({ classes }) => (
  <div>

    <Card title="Skills" height="unset">
      <div className={classes.skills}>
        <Chip text="JavaScript" />
        <Chip text="NodeJS" />
        <Chip text="Express" />
        <Chip text="ReactJS" />
        <Chip text="Redux" />
        <Chip text="jQuery" />
        <Chip text="AngularJS" />
        <Chip text="MongoDB" />
        <Chip text="Mongoose" />
        <Chip text="HTML/CSS" />
        <Chip text="MVC" />
        <Chip text="Git" />
        <Chip text="RESTful APIs" />
        <Chip text="RESTful APIs" />
        <Chip text="MySQL" />
        <Chip text="Knex.js" />
        <Chip text="Vagrant" />
        <Chip text="AWS" />
        <Chip text="NGINX" />
        <Chip text="Mocha" />
        <Chip text="Chai" />
        <Chip text="Agile" />
        <Chip text="PHP" />
        <Chip text="Symfony" />
      </div>
    </Card>

    <Card title="Experience" height="unset">
      <Experience
        img="https://secure.meetupstatic.com/photos/event/a/c/4/6/highres_231404102.jpeg"
        institution="Hack Reactor"
        title="Hacker In Residence"
        start="April 2017"
        end="Present">
        Attended Hack Reactor (formerly MakerSquare) in Austin, TX in the beginning of 2017. Developed a strong web development skill set across the full stack during the 3 month immersive program, focusing on front-end frameworks (AngularJS, React, Backbone), back-end frameworks (NodeJS, Express), database integrations (MySQL, PostgreSQL, MongoDB), deployment (AWS, DigitalOcean) and other various javascript libraries (Redux, Mongoose, Underscore, Mocha, Chai). <br/><br/> Upon graduation in April 2017, I was offered a position as a Hacker in Residence (teaching fellow) at the school in recognition of my achievements.
        </Experience>
    </Card>
  </div>
);

Resume.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Resume);

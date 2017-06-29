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
        img="/public/media/hack-reactor.jpeg"
        institution="Hack Reactor"
        title="Hacker In Residence"
        start="April 2017"
        end="Present"
        isFirst={true}
      >
        Attended Hack Reactor (formerly MakerSquare) in Austin, TX in the beginning of 2017. Developed a strong web development skill set across the full stack during the 3 month immersive program, focusing on front-end frameworks (AngularJS, React, Backbone), back-end frameworks (NodeJS, Express), database integrations (MySQL, PostgreSQL, MongoDB), deployment (AWS, DigitalOcean) and other various javascript libraries (Redux, Mongoose, Underscore, Mocha, Chai). <br/><br/> Upon graduation in April 2017, I was offered a position as a Hacker in Residence (teaching fellow) at the school in recognition of my achievements.
      </Experience>

      <Experience
        img="/public/media/helloworldstudios.png"
        institution="Hello World Tech Stuidos"
        title="Web Development Summer Camp Instructor"
        start="June 2017"
        end="June 2017"
      >
        Attended Hack Reactor (formerly MakerSquare) in Austin, TX in the beginning of 2017. Developed a strong web development skill set across the full stack during the 3 month immersive program, focusing on front-end frameworks (AngularJS, React, Backbone), back-end frameworks (NodeJS, Express), database integrations (MySQL, PostgreSQL, MongoDB), deployment (AWS, DigitalOcean) and other various javascript libraries (Redux, Mongoose, Underscore, Mocha, Chai). <br/><br/> Upon graduation in April 2017, I was offered a position as a Hacker in Residence (teaching fellow) at the school in recognition of my achievements.
      </Experience>

    </Card>

    <Card title="Education" height="unset">

      <Experience
        img="/public/media/hack-reactor.jpeg"
        institution="Hack Reactor"
        title="Student"
        start="January 2017"
        end="April 2017"
        isFirst={true}
      >
        Attended Hack Reactor (formerly MakerSquare) in Austin, TX in the beginning of 2017. Developed a strong web development skill set across the full stack during the 3 month immersive program, focusing on front-end frameworks (AngularJS, React, Backbone), back-end frameworks (NodeJS, Express), database integrations (MySQL, PostgreSQL, MongoDB), deployment (AWS, DigitalOcean) and other various javascript libraries (Redux, Mongoose, Underscore, Mocha, Chai). <br/><br/> Upon graduation in April 2017, I was offered a position as a Hacker in Residence (teaching fellow) at the school in recognition of my achievements.
      </Experience>

      <Experience
        img="/public/media/aca.jpg"
        institution="Austin Coding Academy"
        title="Student"
        start="May 2015"
        end="November 2015"
      >
        Attended Hack Reactor (formerly MakerSquare) in Austin, TX in the beginning of 2017. Developed a strong web development skill set across the full stack during the 3 month immersive program, focusing on front-end frameworks (AngularJS, React, Backbone), back-end frameworks (NodeJS, Express), database integrations (MySQL, PostgreSQL, MongoDB), deployment (AWS, DigitalOcean) and other various javascript libraries (Redux, Mongoose, Underscore, Mocha, Chai). <br/><br/> Upon graduation in April 2017, I was offered a position as a Hacker in Residence (teaching fellow) at the school in recognition of my achievements.
      </Experience>

      <Experience
        img="/public/media/ut.jpg"
        institution="University of Texas at Austin"
        title="B.A. in Hispanic Studies with Minor in Biomedical Engineering"
        start="August 2010"
        end="December 2015"
      >
        Attended Hack Reactor (formerly MakerSquare) in Austin, TX in the beginning of 2017. Developed a strong web development skill set across the full stack during the 3 month immersive program, focusing on front-end frameworks (AngularJS, React, Backbone), back-end frameworks (NodeJS, Express), database integrations (MySQL, PostgreSQL, MongoDB), deployment (AWS, DigitalOcean) and other various javascript libraries (Redux, Mongoose, Underscore, Mocha, Chai). <br/><br/> Upon graduation in April 2017, I was offered a position as a Hacker in Residence (teaching fellow) at the school in recognition of my achievements.
      </Experience>

    </Card>
  </div>
);

Resume.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Resume);

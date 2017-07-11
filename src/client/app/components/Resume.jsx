import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Card from './Card.jsx';
import Chip from './Chip.jsx';
import Image from './Image.jsx';
import Experience from './Experience.jsx';

import { skills, experiences, education } from '../data/resume.js';

const styles = {
  skills: {
    textAlign: 'center'
  }
};

const Resume = ({ classes }) => (
  <div>

    <div className="row">

      <div className="col-sm-9">
        <Card title="Skills" height="unset">
          <div className={classes.skills}>
            {skills.map((skill, index) => <Chip text={skill} key={index} />)}
          </div>
        </Card>
      </div>

      <div className="col-sm-3">
        <Image img="/public/media/download.svg" title="Download PDF" fit={true}/>
      </div>

    </div>



    <Card title="Experience" height="unset">
      {experiences.map(({img, institution, title, start, end, isFirst, description}, index) => (
        <Experience
          img={img}
          institution={institution}
          title={title}
          start={start}
          end={end}
          isFirst={isFirst}
          description={description}
          key={index}
        >{description}</Experience>
      ))}
    </Card>

    <Card title="Education" height="unset">
      {education.map(({img, institution, title, start, end, isFirst, description}, index) => (
        <Experience
          img={img}
          institution={institution}
          title={title}
          start={start}
          end={end}
          isFirst={isFirst}
          description={description}
          key={index}
        >{description}</Experience>
      ))}
    </Card>
  </div>
);

Resume.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Resume);

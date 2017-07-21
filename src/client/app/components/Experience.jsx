import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { grey300, lightBlue300 } from '../constants/colors.js';

import Card from './Card.jsx';
import Image from './Image.jsx';

const styles = {
  headers: {
    marginTop: 0,
    marginBottom: '10px',
    fontWeight: 300
  },
  body: {
    fontSize: '16px'
  },
  image: {
    boxShadow: `2px 2px 1px ${lightBlue300}`
  },
  'list': {
    paddingLeft: '20px',
    fontSize: '16px'
  },
  '@media (max-width: 768px)': {
    headers: {
      marginTop: '15px'
    }
  }
};

const Experience = ({ classes, img, institution, title, start, end, children, isFirst }) => (
  <Card shadow={4} height="unset" noMargin={Boolean(isFirst)} backgroundColor={grey300}>
    <div className="row">
      <div className="col-sm-3">
        <Image img={img} noMargin={true} shadow={0} fit={true} />
      </div>
      <div className="col-sm-9">
        <h3 className={classes.headers}>{institution}</h3>
        <h4 className={classes.headers}>{title}</h4>
        <h6 className={classes.headers}>{start} - {end}</h6>
        <div className={classes.body}>
          <ul className={classes.list}>
            {children.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
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
  children: PropTypes.node,
  isFirst: PropTypes.bool
};

export default injectSheet(styles)(Experience);

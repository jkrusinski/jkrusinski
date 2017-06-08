import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {

};

const Project = ({ classes, name, children, github, link }) => (
  <div className="mdl-card mdl-shadow--2dp">

    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">{name}</h2>
    </div>

    <div className="mdl-card__supporting-text">
      {children}
    </div>

    <div className="mdl-card__actions mdl-card--border">
      &nbsp;
    </div>

  </div>
);

Project.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  children: PropTypes.node,
  github: PropTypes.string,
  link: PropTypes.string
};

export default injectSheet(styles)(Project);

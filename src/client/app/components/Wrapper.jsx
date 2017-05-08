import React from 'react';
import PropTypes from 'prop-types';
import { green500 } from '../constants/colors.js';

const styles = {
  backgroundColor: green500,
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: 300,
  zIndex: -1
};

const Wrapper = ({ children }) => (
  <div className="container">
    <div style={styles}></div>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;

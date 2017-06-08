import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

class Portfolio extends Component {

  render() {
    const { message, toggleMessage } = this.props;

    return (
      <div>
        <h1>Hello World</h1>
        <p>{ message }</p>
        <button onClick={() => toggleMessage()}>Toggle</button>
      </div>
    );
  }
}

Portfolio.propTypes = {
  message: PropTypes.string,
  toggleMessage: PropTypes.func
};

var mapStateToProps = function({ message }) {
  return { message };
};

var mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);

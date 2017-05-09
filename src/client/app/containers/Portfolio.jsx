import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

const styles = {
  card: {
    width: '100%'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {

  }
};

class Portfolio extends Component {

  render() {
    const { message, toggleMessage } = this.props;

    return (
      <div style={styles.card} className="mdl-card mdl-shadow--4dp">

        <div className="mdl-card__supporting-text">
          <h1>Hello World</h1>
          <p>{ message }</p>
        </div>

        <div style={styles.actions} className="mdl-card__actions mdl-card--border">
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => toggleMessage()}>
            Toggle
          </button>
        </div>

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

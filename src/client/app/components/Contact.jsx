import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card.jsx';
import SendForm from '../containers/SendForm.jsx';

class Contact extends Component {

  componentDidMount() {
    // required to add animations to dynamically added MDL components
    window.componentHandler.upgradeAllRegistered();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <Card title="Get In Touch" height="unset">
            <SendForm />
          </Card>
        </div>
      </div>
    );
  }
}

export default Contact;

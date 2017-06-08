import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  text: {
    width: '100%'
  },
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    color: '#fff !important'
  }
};

class Form extends Component {
  render() {
    const { classes, name, email, message, handleName, handleEmail, handleMessage } = this.props;
    return (
      <form>

        <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${classes.text}`}>
          <input
            id="contact-name"
            className="mdl-textfield__input"
            type="text"
            value={name}
            onChange={(e) => handleName(e.target.value)} />
          <label htmlFor="contact-name" className="mdl-textfield__label">Name</label>
        </div>

        <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${classes.text}`}>
          <input
            id="contact-email"
            className="mdl-textfield__input"
            type="text"
            pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            value={email}
            onChange={(e) => handleEmail(e.target.value)} />
          <label htmlFor="contact-email" className="mdl-textfield__label">Email</label>
          <span className="mdl-textfield__error">Valid Email Required</span>
        </div>

        <div className={`mdl-textfield mdl-js-textfield ${classes.text}`}>
          <textarea
            className="mdl-textfield__input"
            type="text"
            rows="3"
            id="contact-message"
            value={message}
            onChange={(e) => handleMessage(e.target.value)}></textarea>
          <label className="mdl-textfield__label" htmlFor="contact-message">Message</label>
        </div>

        <div className={classes.actions}>
          <button
            type="submit"
            className={`mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored ${classes.button}`}>
            Send
          </button>
        </div>

      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  handleName: PropTypes.func,
  handleEmail: PropTypes.func,
  handleMessage: PropTypes.func
};

export default injectSheet(styles)(Form);

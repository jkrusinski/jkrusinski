import { connect } from 'react-redux';
import { formName, formEmail, formMessage } from '../actions';

import Form from '../components/Form.jsx';

const mapStateToProps = (state) => {
  return state.form; // name, email, & message
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleName: (data) => dispatch(formName(data)),
    handleEmail: (data) => dispatch(formEmail(data)),
    handleMessage: (data) => dispatch(formMessage(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

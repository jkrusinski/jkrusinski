import { connect } from 'react-redux';
import { formName, formEmail, formMessage, sendForm } from '../actions';

import Form from '../components/Form.jsx';

const mapStateToProps = (state) => {
  return {
    form: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleForm: (form) => dispatch(sendForm(form)),
    handleName: (data) => dispatch(formName(data)),
    handleEmail: (data) => dispatch(formEmail(data)),
    handleMessage: (data) => dispatch(formMessage(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

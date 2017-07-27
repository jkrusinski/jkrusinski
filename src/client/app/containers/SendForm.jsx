import { connect } from 'react-redux';
import { formName, formEmail, formMessage, sendForm } from '../actions';

import Form from '../components/Form.jsx';

const mapStateToProps = ({ form, formStatus }) => {
  return {
    form,
    posting: formStatus.posting,
    error: formStatus.error
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

export const form = (state = {
  name: '',
  email: '',
  message: ''
}, action) => {

  switch (action.type) {
    case 'FORM_NAME':
      return {
        ...state,
        name: action.data
      };
    case 'FORM_EMAIL':
      return {
        ...state,
        email: action.data
      };
    case 'FORM_MESSAGE':
      return {
        ...state,
        message: action.data
      };
    case 'FORM_RESET':
      return {
        name: '',
        email: '',
        message: ''
      };
    default:
      return state;
  }
};

export const formStatus = (state = {
  posting: false,
  error: null
}, action) => {

  switch (action.type) {
    case 'FORM_POSTING':
      return {
        ...state,
        posting: true
      };
    case 'FORM_POSTED':
      return {
        ...state,
        posting: false
      };
    case 'FORM_ERROR':
      return {
        ...state,
        error: action.message
      };
    case 'FORM_ERROR_CLR':
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const defaultState = {
  name: '',
  email: '',
  message: ''
};

export const form = (state = defaultState, action) => {
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
    default:
      return state;
  }
};

import { TOGGLE_MESSAGE } from '../constants/message-types.js';

export function message(state = 'Hello World', action) {
  switch(action.type) {

    case TOGGLE_MESSAGE:
      return state === 'Hello World' ? 'Goodbye World' : 'Hello World';

    default:
      return state;
  }
}

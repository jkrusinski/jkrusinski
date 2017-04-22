import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';
import Portfolio from './Portfolio.jsx';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </div>
    );
  }
}

export default App;

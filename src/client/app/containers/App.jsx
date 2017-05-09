import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';

import Wrapper from '../components/Wrapper.jsx';
import Navigation from '../components/Navigation.jsx';
import Header from '../components/Header.jsx';
import Portfolio from './Portfolio.jsx';

const reducer = combineReducers(reducers);
const store = JSON.parse(process.env.DEBUG || 'false')
  ? createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  : createStore(reducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Wrapper>
            <Navigation />
            <Header />
            <Portfolio />
          </Wrapper>
        </Provider>
    );
  }
}

export default App;

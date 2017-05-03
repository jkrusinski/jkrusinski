import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import {
  green500, green700, green400,
  amber500, amber700, amber400,
  grey900, grey400, grey600
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green400,
    accent1Color: amber500,
    accent2Color: amber700,
    accent3Color: amber400,
    textColor: grey900,
    borderColor: grey400,
    pickerHeaderColor: green500,
  },
});

import * as reducers from '../reducers';

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
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <Header />
              <Portfolio />
            </div>
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;

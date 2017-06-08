import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { env } from '../../../../config.js';

import * as reducers from '../reducers';

import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Resume from '../components/Resume.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const reducer = combineReducers(reducers);

// set up redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && env === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <NavBar />
              <div className="container">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/contact" component={Contact} />
                  <Route render={() => <Redirect to="/about" />} />
                </Switch>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

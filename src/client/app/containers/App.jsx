import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import * as reducers from '../reducers';

import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Resume from '../components/Resume.jsx';
import Contact from '../components/Contact.jsx';

const reducer = combineReducers(reducers);
const store = JSON.parse(process.env.DEBUG || 'false')
  ? createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  : createStore(reducer);

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
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

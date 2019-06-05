import React, { Component } from 'react';
import Layout from './component/Layout'
import classes from './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MainPage from './container/mainPage/MainPage';
import Results from './container/results/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={MainPage} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/login" component={MainPage} />
          <Route exact path="/register" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;

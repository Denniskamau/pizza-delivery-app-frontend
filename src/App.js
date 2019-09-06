import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route,Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
// import the pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Update from './pages/Update';

export const history = createBrowserHistory()

class App extends Component {


  render() {
    return (
      <div className="App">
      <ToastContainer/>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/about" component={ About }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/register" component={ Register }/>
            <Route path="/order" component={ Dashboard } />
            <Route path="/admin" component={ Admin } />
            <Route path="/update" component={ Update } />
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}


export default App

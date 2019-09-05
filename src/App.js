import React, { Component } from 'react';
import { Router } from 'react-router'
import { Route,Switch } from "react-router-dom"
import LoginContainer from './components/Registration/Login/LoginContainer'
import SignupContainer from './components/Registration/Signup/SignupContainer'
import DashboardContainer from './components/Dashboard/DashboardContainer'
import Home from './components/Home/HomeContainer'
import AdminPage from './components/Dashboard/AdminContainer';
import createBrowserHistory from 'history/createBrowserHistory'
import AdminContainer from './components/Dashboard/AdminContainer';

export const history = createBrowserHistory()

class App extends Component {


  render() {
    return (
    <Router history={history}>
    <div>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={LoginContainer}/>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/admin" component={AdminContainer} />
      </Switch>

    </div>

  </Router>
    )
  }
}


export default App
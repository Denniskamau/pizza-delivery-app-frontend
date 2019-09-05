import React, { Component } from 'react';
import { Router } from 'react-router'
import { Route, Link,Switch } from "react-router-dom"
import LoginContainer from './components/Registration/Login/LoginContainer'
import SignupContainer from './components/Registration/Signup/SignupContainer'
import DashboardContainer from './components/Dashboard/DashboardContainer'
import Home from './components/Home/HomeContainer'
import { ConnectedRouter } from 'connected-react-router'
import createBrowserHistory from 'history/createBrowserHistory'

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
      </Switch>

    </div>

  </Router>
    )
  }
}


export default App
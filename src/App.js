import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LoginContainer from './components/Registration/Login/LoginContainer'
import SignupContainer from './components/Registration/Signup/SignupContainer'

import {history} from './store'
import { ConnectedRouter } from 'connected-react-router'
class App extends Component {


  render() {
    return (

    <Router>
      <ConnectedRouter history={history}>
      <div>

        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <hr></hr>
        <Route exact path="/" component={LoginContainer}  />
        <Route path="/signup" component={SignupContainer} />

      </div>
      </ConnectedRouter>
    </Router>



    )
  }
}


export default App
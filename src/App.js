import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import LoginContainer from './components/Registration/Login/LoginContainer'
import SignupContainer from './componentsRegistration//Signup/SignupContainer'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Route exact path="/" component={LoginContainer}  />
        <Route path="/signup" component={SignupContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;

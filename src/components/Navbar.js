// src/pages/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userAction from '../actions/userAction';

class Navbar extends Component {

  componentWillMount() {
      if (sessionStorage.getItem('jwt')) {
          this.props.loginSuccess();
      } else {
          this.props.loginUnSuccess();
      }
  }
  clearSessionStorage = () => {
    sessionStorage.removeItem('jwt')
  }

  render () {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-styled-font" to="/">
              Pizza Ordering System
            </Link>

            <Link role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>

            </div>
            { !this.props.loggedin ? (
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link className="button is-dark is-outlined" to="/register">
                      <strong>Register</strong>
                    </Link>
                    <Link className="button is-dark" to="/login">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">
                    user
                  </Link>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/dashboard">
                      Dashboard
                    </Link>
                    <hr className="navbar-divider" />
                    <Link onClick={ this.clearSessionStorage } className="navbar-item" to="/">
                      Logout
                    </Link>
                  </div>
                </div>
                <Link onClick={ this.clearSessionStorage } className="navbar-item" to="/">
                  Logout
                </Link>
              </div>
            ) }
          </div>
        </div>
      </nav>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    loggedin: state.user.loggedin,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: user => dispatch(userAction.LoginSuccess()),
    loginUnSuccess: user => dispatch(userAction.LoginUnSuccess())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);

// src/pages/Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userAction from '../actions/userAction';

import Navbar from '../components/Navbar';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:''
    }
  }
  handleInputChange = event => {
    this.setState({ [ event.target.name ]: event.target.value });
  };

  handleSubmit= event =>{
    event.preventDefault();
    this.props.loginUser({ ...this.state });
  }

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <Navbar/>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-two-fifths">
                <form onSubmit={ this.handleSubmit }>
                  <legend className="heading is-size-3">Login</legend>
                  <hr/>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input className="input" type="email" placeholder="Email" onChange={ this.handleInputChange } />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="password" onChange={ this.handleInputChange } />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-dark is-fullwidth">Login</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column is-two-fifths">
                <img src="../assets/images/login.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(userAction.loginUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

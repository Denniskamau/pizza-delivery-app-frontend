// src/pages/Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userAction from '../actions/userAction';

import Navbar from '../components/Navbar';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
      password:'',
      password_confirmation:'',
    };
  }

  componentWillUpdate(){
    console.log('user will', JSON.stringify(this.state.user));
  }

  componentDidUpdate(){
    console.log('user did', JSON.stringify(this.state.user));
  }

  handleInputChange = event => {
    this.setState({ [ event.target.name ]: event.target.value });
  }

  passwordChecker =()=>{
    return this.state.password === this.state.password_confirmation;
  }

  handleSubmit=event=>{
    event.preventDefault();
    this.props.createUser({ ...this.state });
  }

  render () {
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
                  <legend className="heading is-size-3">Register</legend>
                  <hr/>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                      <input className="input" type="text" placeholder="name" name="name" onChange={ this.handleInputChange } />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input className="input" type="email" placeholder="Email" name="email" onChange={ this.handleInputChange } />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="password" name="password" onChange={ this.handleInputChange } />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="confirm password" name="password_confirmation" onChange={ this.handleInputChange } />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-dark is-fullwidth">Register</button>
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
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    logedin: state.user.logedin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userAction.createUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

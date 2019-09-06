// src/pages/Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userAction from '../actions/userAction';

import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:'',
      errors:{}
    }
  }
  handleInputChange = event => {
    this.setState({ [ event.target.name ]: event.target.value });
  };
  handleValidation = () => {
    let errors = {};
    let formIsValid = true;
    if(!this.state.email){
      formIsValid = false;
      errors["email"] = "Email is required";
    }
    if(!this.state.password){
      formIsValid =false;
      errors["password"] = "Password is required";
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  handleSubmit= event =>{
    event.preventDefault();
    if(this.handleValidation()){
      let user ={
        "email": this.state.email,
        "password":this.state.password
      }
      this.props.loginUser(user);
    }else{
      toast.error('Email or password is incorrect')
    }

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
                      <input className="input" type="email" name="email" placeholder="Email" onChange={ this.handleInputChange } />
                      <span style={{color: "red"}} className="error">{this.state.errors["email"]}</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" name="password" placeholder="password" onChange={ this.handleInputChange } />
                      <span style={{color: "red"}} className="error">{this.state.errors["password"]}</span>
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

// src/pages/Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userAction from '../actions/userAction';

import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
      password:'',
      password_confirmation:'',
      errors:{}
    };
  }


  handleValidation = () => {
    let errors = {};
    let formIsValid = true;
    if(!this.state.name){
      formIsValid = false;
      errors["name"] = "name is required";
    }
    if(!this.state.email){
      formIsValid = false;
      errors["email"] = "Email is required";
    }
    if(!this.state.password){
      formIsValid =false;
      errors["password"] = "Password is required";
    }
    if(this.state.password.length < 8){
      formIsValid =false;
      errors["password"] = "Password should be greater than 8 characters";
    }
    if(!this.state.password_confirmation){
      formIsValid =false;
      errors["password_confirmation"] = "Password confirmation is required";
    }
    if(this.state.password_confirmation !== this.state.password){
      formIsValid =false;
      errors["password_confirmation"] = "Password must match confirmation";
    }
    this.setState({errors: errors});
    return formIsValid;
  }
  handleInputChange = event => {
    this.setState({ [ event.target.name ]: event.target.value });
  }

  passwordChecker =()=>{
    return this.state.password === this.state.password_confirmation;
  }

  handleSubmit=event=>{
    event.preventDefault();
    if(this.handleValidation()){
      let user = {
        "name":this.state.name,
        "email": this.state.email,
        "password":this.state.password,
        "password_confirmation":this.state.password_confirmation,
      }
      this.props.createUser(user);
    }else{
      toast.error('Form has errors')
    }

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
                      <span style={{color: "red"}} className="error">{this.state.errors["name"]}</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input className="input" type="email" placeholder="Email" name="email" onChange={ this.handleInputChange } />
                      <span style={{color: "red"}} className="error">{this.state.errors["email"]}</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="password" name="password" onChange={ this.handleInputChange } />
                      <span style={{color: "red"}} className="error">{this.state.errors["password"]}</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="confirm password" name="password_confirmation" onChange={ this.handleInputChange } />
                      <span style={{color: "red"}} className="error">{this.state.errors["password_confirmation"]}</span>
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

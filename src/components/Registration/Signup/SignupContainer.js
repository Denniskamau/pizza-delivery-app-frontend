import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../../actions/userAction';

class SignupContainer extends Component {

  constructor(props){
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password:'',
      confirmPassword:''
    }
  }

  handlePasswordChange=event=>{
    this.setState({
      password: event.target.value
    })
  }
  handleConfirmPasswordChange=event=>{
    this.setState({
      confirmPassword: event.target.value
    })
  }
  handleEmailChange=event=>{
    this.setState({
      email: event.target.value
    })
  }

  passwordChecker =()=>{
    return this.state.password === this.state.confirmPassword;
  }

  handleSubmit=event=>{
    event.preventDefault();
    let user ={
        email: this.state.email,
        password:this.state.password
    }
    this.props.createUser(user);
  }


  render() {

    return(
      <div>
        <h1>Pizza App</h1>
        <hr />
        <div>
          <h3>Login Form</h3>
          <form  onSubmit={this.handleSubmit}>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input is-rounded" type="email"
                onChange={this.handleEmailChange}
                placeholder="example@example.com"/>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>

              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Password</label>
          </div>
          <div class="field-body">
            <div class="field">
            <p class="control has-icons-left">
                <input class="input is-rounded" type="password"
                onChange={this.handlePasswordChange}
                 placeholder="Password"/>
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
          </div>

        </div>
        <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Confirm Password</label>
        </div>
        <div class="field-body">
          <div class="field">
          <p class="control has-icons-left">
              <input class="input is-rounded" type="password"
              onChange={this.handleConfirmPasswordChange}
              placeholder="Password"/>
              <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>

      </div>
        <div class="field is-horizontal">
        <div class="field-body">
        <div class="control">
        <button class="button is-link" type="submit">Submit</button>
      </div>
        </div>

      </div>

          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userAction.createUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer );
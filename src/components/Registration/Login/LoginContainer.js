import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../../actions/userAction';
import NavBar from '../../Home/NavBar';
class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password:''
    }
  }
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = event =>{
    this.setState({password: event.target.value})
  }

  handleSubmit= event =>{
    event.preventDefault();

    let user ={
        email: this.state.email,
        password:this.state.password
    }
    this.props.loginUser(user);
  }


  render() {

    return(
      <div>
      <NavBar/>
      <div className="card">
      <header class="card-header">
        <p class="card-header-title">
          Login Form
        </p>
      </header>
        <div className="logincard is-pilled-right">

          <form  onSubmit={this.handleSubmit}>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input is-rounded" name="email" value={this.state.value} type="email"
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
                <input class="input is-rounded" name="password" type="password"
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
        <div class="field-body">
        <div class="control">
        <button class="button is-link" type="submit">Submit</button>
      </div>
        </div>

      </div>

          </form>
        </div>
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
    loginUser: user => dispatch(userAction.loginUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
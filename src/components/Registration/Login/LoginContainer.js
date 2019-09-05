import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../../actions/userAction';
import NavBar from '../../Home/NavBar';
class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:''
    }
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit= event =>{
    event.preventDefault();
    this.props.loginUser({...this.state});
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
                <input class="input is-rounded" name="email" type="email"
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
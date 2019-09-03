import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../../actions/userAction';

class SignupContainer extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      password:''
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let user ={
        name: this.state.name
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
                <input class="input is-rounded" type="email" placeholder="example@example.com"/>
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
                <input class="input is-rounded" type="password" placeholder="Password"/>
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
              <input class="input is-rounded" type="password" placeholder="Password"/>
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
        <button class="button is-link">Submit</button>
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
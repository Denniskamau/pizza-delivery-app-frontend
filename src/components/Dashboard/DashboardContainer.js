import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../actions/userAction';
import OrderContainer from './OrderContainer'

class DashboardComponent extends Component {

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
        <div class="section">
        <div class="container">
        <div class="column is-vcentered">
        <div class="column is-two-fifths">
        <h3>Login Form</h3>
        <form  onSubmit={this.handleSubmit}>
        <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Pizza</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Size</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="select">
          <select>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
        </div>
          </div>
        </div>

      </div>

      <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Toppings</label>
      </div>
      <div class="field-body">
        <div class="field">
        <div class="select">
        <select>
          <option>Large</option>
          <option>Medium</option>
          <option>Small</option>
        </select>
      </div>
        </div>
      </div>

    </div>
      <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Location</label>
      </div>
      <div class="field-body">
        <div class="field">
        <p class="control has-icons-left">
            <input class="input is-rounded" type="text"
            onChange={this.handleConfirmPasswordChange}
            placeholder="Location"/>
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
        <div class="column is-half is-pulled-right">
        <OrderContainer ></OrderContainer>
        </div>
        </div>


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
    createUser: user => dispatch(userAction.createUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../../actions/userAction';
import NavBar from '../../Home/NavBar';
class SignupContainer extends Component {

  constructor(props){
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name:'',
      email: '',
      password:'',
      password_confirmation:'',
    }
  }

  componentWillUpdate(){
    console.log('user will', JSON.stringify(this.state.user))
  }
  componentDidUpdate(){
    console.log('user did', JSON.stringify(this.state.user))
  }

  handlePasswordChange=event=>{
    this.setState({
      password: event.target.value
    })
  }
  handleConfirmPasswordChange=event=>{
    this.setState({
      password_confirmation: event.target.value
    })
  }
  handleEmailChange=event=>{
    this.setState({
      email: event.target.value
    })
  }
  handleNameChange=event=>{
    this.setState({
      name: event.target.value
    })
  }

  passwordChecker =()=>{
    return this.state.password === this.state.password_confirmation;
  }

  handleSubmit=event=>{
    event.preventDefault();
    let user ={
      name:this.state.name,
      email: this.state.email,
      password:this.state.password,
      password_confirmation:this.state.password_confirmation
    }
    let history = this.props.history
    this.props.createUser(user)
    console.log('loged ins', this.props.logedin)
  }


  render() {


    return(
      <div>
      <NavBar/>
        <div className="card">
        <header class="card-header">
        <p class="card-header-title">
          Signup Form
        </p>
      </header>
      <div className="logincard is-pilled-right">
          <form  onSubmit={this.handleSubmit}>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input is-rounded" type="text"
                onChange={this.handleNameChange}
                placeholder="John Doe"/>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>

              </p>
            </div>
          </div>
        </div>
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
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state change', state.user)
  return {
    user: state.user.user,
    logedin: state.user.logedin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userAction.createUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer );
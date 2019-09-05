import React, { Component } from 'react'
import {Link } from "react-router-dom"
import { connect } from 'react-redux';
import * as userAction from '../../actions/userAction';
class NavBar extends Component {

    componentWillMount() {
        if (sessionStorage.getItem('jwt')){
            this.props.loginSuccess();
        }else{
            this.props.loginUnSuccess();
        }
      }
      clearSessionStorage = () => {
          sessionStorage.removeItem('jwt')
      }
  render() {
      if(this.props.logedin){
        return (
            <div>
            <nav class="navbar is-transparent">
        <div class="navbar-brand">

        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">

              <div class="navbar-dropdown is-boxed">
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field">
              <p className="control">
              <Link onClick={this.clearSessionStorage} className="bd-tw-button button" to={'/'}>Logout</Link>
              </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
        </div>
        )
      }else{
        return (
            <div>
            <nav class="navbar is-transparent">
        <div class="navbar-brand">

        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">

              <div class="navbar-dropdown is-boxed">
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                <Link className="bd-tw-button button" to={'/login'}>Login </Link>
                </p>
                <p className="control">
                <Link className="bd-tw-button button" to={'/signup'}>Signup </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
            </div>
          )
      }
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
      logedin: state.user.loggedin
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      loginSuccess: user => dispatch(userAction.LoginSuccess()),
      loginUnSuccess: user => dispatch(userAction.LoginUnSuccess())
    }
  };

  export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../actions/userAction';

class OrderComponent extends Component {

  render() {

    return(
      <div>
        <h1>Pizza App</h1>
        <hr />
        <div>
          <h3>Your Order</h3>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
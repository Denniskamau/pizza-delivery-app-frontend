import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as orderAction from '../../actions/orderAction';

class OrderComponent extends Component {

  componentWillMount () {
    this.props.fetchOrder();
}


  render() {
    console.log('props',JSON.stringify(this.props.orders))
    if(!this.props.orders) {
      return (
        <div>
          No Orders
        </div>
      )
    }
    return(
      <div>
      <p>{this.props.orders}</p>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: order => dispatch(orderAction.fetchOrder())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
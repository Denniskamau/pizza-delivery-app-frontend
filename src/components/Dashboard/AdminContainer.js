import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as orderAction from '../../actions/orderAction';
import NavBar from '../Home/NavBar'
class OrderComponent extends Component {

  componentWillMount () {
    this.props.fetchOrder();
}


  render() {
    console.log('props',JSON.stringify(this.props.orders))
    if(!this.props.orders) {
      return (
        <div>
        <NavBar/>
          No Orders
        </div>
      )
    }
    return(
      <div>
      <NavBar/>
      <p>hallo</p>
        <p>{Object.keys(this.props.orders).map((key,value)=>{
          return <div>Key:{key}, Value:{value}</div>
        })}</p>
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
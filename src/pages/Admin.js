// src/pages/Admin.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as orderAction from '../actions/orderAction';

import Order from '../components/Order';
import Navbar from '../components/Navbar';

import no_data from '../assets/images/no-data.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Admin extends Component {

  componentWillMount () {
    this.props.fetchOrder();
  };

  deleteOrder = (e,id)=> {
    e.preventDefault();
    this.props.deleteOrder(id);
    toast.success('Order Deleted')
  }

  render () {
   const {orders} = this.props
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <Navbar/>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                { !this.props.orders ?  (
                    <figure className="image is-square">
                      <img src={no_data} alt={"no_data"} />
                    </figure>
                  ) : (
                    <div>
                    <p>All Orders</p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Vendor</th>
                          <th>Size</th>
                          <th>Toppings</th>
                          <th>No. Pizzas</th>
                          <th>Location</th>
                          <th>Action</th>

                        </tr>
                      </thead>
                      <tbody>
                    { orders.map((order)=>(
                      <tr>
                      <td>{order.id}</td>
                      <td>{order.pizza}</td>
                      <td>{order.size}</td>
                      <td>{order.toppings}</td>
                      <td>{order.quantity}</td>
                      <td>{order.location}</td>
                      <td><button className="button is-danger" onClick={ (e) =>{this.deleteOrder(e,order.id)}}>Delete</button></td>
                    </tr>
                    ))

                }
                      </tbody>
                    </table>
                    </div>
                  ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {orders: state.orders.orders}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: order => dispatch(orderAction.fetchOrder()),
    deleteOrder: order => dispatch(orderAction.deleteOrder(order)),
    updateOrder: order => dispatch(orderAction.updateOrder(order)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

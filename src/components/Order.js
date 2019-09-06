// src/components/Order.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as orderAction from '../actions/orderAction';

import card_image from '../assets/images/payment.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Order extends Component {


  postOrder = (e) => {
    e.preventDefault();
    let order = {
      pizza: this.props.pizza,
      size: this.props.size,
      toppings: this.props.toppings,
      location: this.props.location,
      quantity: this.props.quantity,
    };
    console.log('order', JSON.stringify(order))
    this.props.createOrder(order);
    toast.success('Order created')
  };

  render () {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-3by1">
            <img src={card_image} alt={"card_image"} />
          </figure>
        </div>
        <div className="card-content">
          <h3 className="title is-styled-font is-size-4">Order Details</h3>
          <hr/>
          <form onSubmit={ this.postOrder }>
            <div className="field">
              <label className="label heading">Pizza Vendor</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="" name="pizza" value={ this.props.pizza } disabled/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label heading">Pizza Size</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="" name="size" value={ this.props.size } disabled/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label heading">Pizza Toppings</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="" name="toppings" value={ this.props.toppings } disabled/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label heading">No. Of Pizzas</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="" name="quantity" value={ this.props.quantity } disabled/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label heading">Delivery Location</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="" name="location" value={ this.props.location } disabled/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <button  type="submit" className="button is-dark is-fullwidth">Confirm Order</button>
            </div>
          </form>

        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: order => dispatch(orderAction.createOrder(order)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

// src/pages/Dashboard.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userAction from '../actions/userAction';

import Order from '../components/Order';
import Navbar from '../components/Navbar';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      pizza: '',
      size: '',
      toppings: '',
      location: '',
      quantity: '',
    };
  };

  handlePizzaChange = event => {
    this.setState({
      pizza: event.target.value,
    });
  };

  handleSizeChange = event => {
    this.setState({
      size: event.target.value,
    });
  };

  handleQuantityChange = event => {
    this.setState({
      quantity: event.target.value,
    });
  };

  handleToppingsChange = event => {
    this.setState({
      toppings: event.target.value,
    });
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value,
    });
  };

  render () {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <Navbar/>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-three-quarters">
                    <h3 className="heading is-size-4">Place An Order</h3>
                    <hr/>
                    <form>
                      <div className="field">
                        <label className="label heading">Pizza Vendor</label>
                        <div className="control has-icons-left">
                          <select className="input" type="text" name="pizza" onChange={ this.handlePizzaChange }>
                           <option value="">- Please Select -</option>
                            <option value="Pizza Inn">Pizza Inn</option>
                            <option value="Pepinos">Pepinos</option>
                            <option value="Debonairs">Debonairs</option>
                            <option value="Pomodoro">Pomodoro</option>
                            <option value="La Salumeria">La Salumeria</option>
                            <option value="La Cascina">La Cascina</option>
                            <option value="Domino's Pizza">Domino's Pizza</option>
                            <option value="Que Pasa">Que Pasa</option>
                            <option value="Pizza Hut">Pizza Hut</option>
                            <option value="360 Degrees Pizza">360 Degrees Pizza</option>
                          </select>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">Pizza Size</label>
                        <div className="control has-icons-left">
                          <select className="input" type="text" name="size" onChange={ this.handleSizeChange }>
                            <option value="">- Please Select -</option>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                          </select>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">Pizza Toppings</label>
                        <div className="control has-icons-left">
                          <select className="input" type="text" name="toppings" onChange={ this.handleToppingsChange }>
                            <option value="">- Please Select -</option>
                            <option value="Onions">Onions</option>
                            <option value="Extra cheese">Extra cheese</option>
                            <option value="Pepperoni">Pepperoni</option>
                            <option value="Bacon">Bacon</option>
                            <option value="Mushrooms">Mushrooms</option>
                            <option value="Green peppers">Green peppers</option>
                          </select>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">No. Of Pizzas</label>
                        <div className="control has-icons-left">
                          <input className="input" type="text" placeholder="" name="quantity" onChange={ this.handleQuantityChange } />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">Delivery Location</label>
                        <div className="control has-icons-left">
                          <input className="input" type="text" placeholder="" name="location" onChange={ this.handleLocationChange } />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                    </form>
              </div>
              <div className="column is-one-quarter">
                <Order pizza={this.state.pizza} size={this.state.size} location={this.state.location}
                toppings={this.state.toppings} quantity={this.state.quantity}></Order>
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
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userAction.createUser(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

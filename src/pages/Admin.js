// src/pages/Admin.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as orderAction from '../actions/orderAction';

import Order from '../components/Order';
import Navbar from '../components/Navbar';

import no_data from '../assets/images/no-data.svg';

class Admin extends Component {

  componentWillMount () {
    this.props.fetchOrder();
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
              <div className="column is-half">
                { !this.props.orders ?  (
                    <figure className="image is-square">
                      <img src={no_data} alt={"no_data"} />
                    </figure>
                  ) : (
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Vendor</th>
                          <th>Size</th>
                          <th>Toppings</th>
                          <th>No. Pizzas</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  ) }
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

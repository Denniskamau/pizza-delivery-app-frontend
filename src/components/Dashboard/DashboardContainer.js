import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../../actions/userAction';
import OrderContainer from './OrderContainer'
import NavBar from '../Home/NavBar'

class DashboardComponent extends Component {

  constructor(props){
    super(props);
    this.handlePizzaChange = this.handlePizzaChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleToppingsChange = this.handleToppingsChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);

    this.state = {
      pizza: '',
      size:'',
      toppings:'',
      location: '',
      quantity:''
      }
  }

  handlePizzaChange=event=>{
    this.setState({
      pizza: event.target.value
    })
  }
  handleSizeChange=event=>{
    this.setState({
      size: event.target.value
    })
  }
  handleQuantityChange=event=>{
    this.setState({
      quantity: event.target.value
    })
  }
  handleToppingsChange=event=>{
    this.setState({
      toppings: event.target.value
    })
  }
  handleLocationChange=event=>{
    this.setState({
      location: event.target.value
    })
  }




  render() {

    return(
      <div>
      <NavBar/>
        <div class="orderform">
        <div class="card">

        <div class="container">

        <div class="column is-two-fifths">
        <h3>Order Form</h3>


        <form  onSubmit={this.handleSubmit}>
        <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Pizza</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="select is-rounded">
          <select onChange={this.handlePizzaChange}>
            <option>Pizza Inn</option>
            <option>Pepinos</option>
            <option>Debonairs</option>
            <option>Pomodoro</option>
            <option>La Salumeria</option>
            <option>La Cascina</option>
            <option>Domino's Pizza</option>
            <option>Que Pasa</option>
            <option>Pizza Hut</option>
            <option>360 Degrees Pizza</option>
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
          <div class="select is-rounded">
          <select onChange={this.handleSizeChange}>
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
        <div class="select is-rounded">
        <select onChange={this.handleToppingsChange}>
          <option>Onios</option>
          <option>Extra cheese</option>
          <option>Pepperoni</option>
          <option>bacon</option>
          <option>Mushrooms</option>
          <option>Green peppers</option>
        </select>
      </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Quantity</label>
    </div>
    <div class="field-body">
      <div class="field is-rounded">
      <p class="control has-icons-left">
          <input class="input is-rounded" type="text"
          onChange={this.handleQuantityChange}
          placeholder="Quantity"/>
          <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
    </div>
  </div>
      <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Location</label>
      </div>
      <div class="field-body">
        <div class="field is-rounded">
        <p class="control has-icons-left">
            <input class="input is-rounded" type="text"
            onChange={this.handleLocationChange}
            placeholder="Location"/>
            <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
        </form>
        </div>


        </div>

        </div>
        <div class="card is-pulled-right">
        <div class="column is-half ">
        <OrderContainer pizza={this.state.pizza} size={this.state.size} location={this.state.location}
        toppings={this.state.toppings} quantity={this.state.quantity}></OrderContainer>
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
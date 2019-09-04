import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as orderAction from '../../actions/orderAction';

class OrderComponent extends Component {
  constructor(props){
    super(props);
    this.postOrder = this.postOrder.bind(this);

  }

  postOrder = (e) => {
    e.preventDefault();
    let order = {
      pizza: this.props.pizza,
      size:this.props.size,
      toppings: this.props.toppings,
      location:this.props.location
    }
    this.props.createOrder(order);
    // console.log('order pizza',JSON.stringify(order))
  }
  render() {

    return(
      <div>
        <div>
          <h3>Your Order</h3>
          <div>
          <form  onSubmit={this.postOrder}>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Pizza</label>
          </div>
          <div class="field-body">
            <div class="field">
            <p class="control has-icons-left">
                <input class="input is-rounded" type="text"

                value={this.props.pizza} disabled/>

              </p>
            </div>
          </div>

        </div>

        <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Size</label>
        </div>
        <div class="field-body">
          <div class="field">
          <p class="control has-icons-left">
              <input class="input is-rounded" type="text"

              value={this.props.size} disabled/>

            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Toppings</label>
      </div>
      <div class="field-body">
        <div class="field">
        <p class="control has-icons-left">
            <input class="input is-rounded" type="text"

            value={this.props.toppings} disabled/>

          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Location</label>
    </div>
    <div class="field-body">
      <div class="field">
      <p class="control has-icons-left">
          <input class="input is-rounded" type="text"

          value={this.props.location} disabled/>

        </p>
      </div>
    </div>

  </div>
  <div class="field is-horizontal">
      <div class="field-body">
      <div class="control">
      <button class="button is-link" type="submit">Confirm order</button>
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
  return {
    order: state.order
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: order => dispatch(orderAction.createOrder(order))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
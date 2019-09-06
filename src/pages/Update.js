import React, { Component } from 'react'
import card_image from '../assets/images/payment.jpg';
class Update extends Component {

    updateOrder = (e,id)=>{
        e.preventDefault();
        this.props.updateOrder(id);
      }
    render() {
        return (
            <div className="column is-half">
            <div className="card">
            <div className="card-image">
              <figure className="image is-3by1">
                <img src={card_image} alt={"card_image"} />
              </figure>
            </div>
            <div className="card-content">
              <h3 className="title is-styled-font is-size-4">Order Details</h3>
              <hr/>
              <form >
                <div className="field">
                  <label className="label heading">Pizza Vendor</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="" name="pizza" value={ this.props.pizza }/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label heading">Pizza Size</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="" name="size" value={ this.props.size }/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label heading">Pizza Toppings</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="" name="toppings" value={ this.props.toppings } />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label heading">No. Of Pizzas</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="" name="quantity" value={ this.props.quantity }/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label heading">Delivery Location</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="" name="location" value={ this.props.location } />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <button  type="submit" className="button is-dark is-fullwidth"> Update Order</button>
                </div>
              </form>
            </div>
          </div>
          </div>
        )
    }
}

export default Update
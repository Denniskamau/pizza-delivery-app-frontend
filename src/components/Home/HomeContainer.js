import React, { Component } from 'react'
import {Link } from "react-router-dom"
import NavBar from './NavBar'
export default class HomeContainer extends Component {
  componentWillMount(){

  }
  render() {
    return (
      <div>
        <NavBar/>
        <h1>Welcome to Online Pizza Ordering App</h1>
        <h2>Pizza Ordering made easier</h2>
      </div>
    )
  }
}

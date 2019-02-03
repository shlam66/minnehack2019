import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router'

// import Navbar from './components/Navbar'

import ContractList from './components/ContractList'
import Button from './components/Button'

import './components/Components.css'

export default class App extends Component {
  render() {
    return <div>
      <ContractList></ContractList>
    </div>
  }
}

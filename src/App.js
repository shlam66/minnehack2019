import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Contracts from './components/Contracts'
import NewContract from './components/NewContract'
import Logs from './components/Logs'
import NewLog from './components/NewLog'
import DataSets from './components/DataSets'

import './App.css'

const AppRouter = () => (
  <Router>
    <div>
      <Navbar />
      <div className="container hemp-container">
        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={About} />

        <Route path="/contracts/" exact component={Contracts} />
        <Route path="/contracts/new" component={NewContract} />

        <Route path="/logs/" exact component={Logs} />
        <Route path="/logs/new" component={NewLog} />
        
        <Route path="/data/" component={DataSets} />
      </div>
    </div>
  </Router>
)

export default class App extends Component {
  render() {
    return <AppRouter />
  }
}

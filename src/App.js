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
import Login from './components/Login'

import './App.css'

const AppRouter = ({ user }) => (
  <Router>
    <div>
      {user && <Navbar />}
      <div className="container hemp-container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />

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
  state = {
    user: {
      id: 1,
      name: 'Marcus Virginia'
    }
  }
  render() {
    return <AppRouter user={this.state.user} />
  }
}

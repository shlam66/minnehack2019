import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import api from './api'

import './components/Components.css'

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import About from './components/About'
import WhatsNext from './components/WhatsNext'

import ContractList from './components/ContractList'
import NewContract from './components/NewContract'
import ContractBought from './components/ContractBought'

import Logs from './components/Logs'
import NewLog from './components/NewLog'
import DataSets from './components/DataSets'
import Login from './components/Login'

import './App.css'

const AppRouter = ({ onLogin, user, login, logout, fetchLogs, logEntries }) => (
  <Router>
    <div>
      {onLogin === false && <Navbar user={user} logout={logout} />}
      <div className="container hemp-container">
        <Route path="/" exact component={HomePage} />
        <Route
          path="/login"
          render={props => <Login {...props} login={login} />}
        />

        <Route path="/about/" component={About} />

        <Route path="/contracts/" exact component={ContractList} />
        <Route path="/contracts/new" component={NewContract} />
        <Route path="/contracts/buy" component={ContractBought} />

        <Route path="/next" component={WhatsNext} />

        <Route
          path="/logs/"
          exact
          render={props => <Logs {...props} logs={logEntries} />}
        />
        <Route
          path="/logs/new"
          render={props => <NewLog {...props} addlog={fetchLogs} />}
        />

        <Route path="/data/" component={DataSets} />
      </div>
    </div>
  </Router>
)

export default class App extends Component {
  state = {
    user: null,
    onLogin: false,
    logEntries: null
  }

  componentWillMount() {
    api.get('/owners/1').then(response => {
      this.setState({ user: response.data })
    })
    this.fetchLogs()
  }

  login = user => {
    this.setState({ user })
  }

  logout = () => {
    this.setState({ user: null })
  }

  fetchLogs = () => {
    api.get('/log_entries').then(response => {
      this.setState({ logEntries: response.data })
    })
  }

  render() {
    return (
      <AppRouter
        user={this.state.user}
        onLogin={this.state.onLogin}
        login={this.login}
        logout={this.logout}
        fetchLogs={this.fetchLogs}
        logEntries={this.state.logEntries}
      />
    )
  }
}

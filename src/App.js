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
import ContractAccepted from './components/ContractAccepted'

import Logs from './components/Logs'
import NewLog from './components/NewLog'
import LogUpdate from './components/LogUpdate'
import LogDetail from './components/LogDetail'

import DataSets from './components/DataSets'
import Login from './components/Login'

import './App.css'

const AppRouter = ({
  onLogin,
  user,
  login,
  logout,
  fetchLogs,
  logEntries,
  contracts,
  deleteLog
}) => (
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

        <Route
          path="/contracts/"
          exact
          render={props => <ContractList {...props} contracts={contracts} />}
        />
        <Route path="/contracts/new" component={NewContract} />
        <Route path="/contracts/accept" component={ContractAccepted} />

        <Route path="/next" component={WhatsNext} />

        <Route
          path="/logs/"
          exact
          render={props => (
            <Logs {...props} logs={logEntries} deleteLog={deleteLog} />
          )}
        />
        <Route
          path="/logs/new"
          render={props => <NewLog {...props} addlog={fetchLogs} />}
        />
        <Route
          path="/logs/update/:id"
          render={props => <LogUpdate {...props} addlog={fetchLogs} />}
        />
        <Route path="/logs/details/:id" component={LogDetail} />

        <Route path="/data/" component={DataSets} />
      </div>
    </div>
  </Router>
)

export default class App extends Component {
  state = {
    user: null,
    onLogin: false,
    logEntries: null,
    contracts: null
  }

  componentWillMount() {
    api.get('/owners/1').then(response => {
      this.setState({ user: response.data })
    })
    this.fetchLogs()
    this.fetchContracts()
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

  fetchContracts = () => {
    api
      .get('/contracts')
      .then(response => {
        this.setState({ contracts: response.data })
      })
      .catch(err => {
        console.log('Error querying the API')
        console.error(err)
      })
  }

  deleteLog = id => {
    api.delete(`/log_entries/${id}`).then(() => this.fetchLogs())
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
        contracts={this.state.contracts}
        deleteLog={this.deleteLog}
      />
    )
  }
}

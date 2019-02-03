import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import api from './api'

import './components/Components.css'

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

const AppRouter = ({ onLogin, user, login, logout }) => (
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
  componentWillMount() {
    api.get('/owners/1').then(response => {
      this.setState({ user: response.data })
    })
  }

  login = user => {
    this.setState({ user })
  }

  logout = () => {
    this.setState({ user: null })
  }

  state = {
    user: null,
    onLogin: false
  }

  render() {
    return (
      <AppRouter
        user={this.state.user}
        onLogin={this.state.onLogin}
        login={this.login}
        logout={this.logout}
      />
    )
  }
}

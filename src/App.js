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

const AppRouter = () => (
  <Router>
    <div style={{backgroundColor: "#FF0000"}}>
      <h1>HEMPTATION biiiiiiitch</h1>
      <Navbar />

      <Route path="/" exact component={HomePage} />
      <Route path="/about/" component={About} />

      <Route path="/contracts/" component={Contracts} />
      <Route path="/newcontract/" component={NewContract} />

      <Route path="/logs/" component={Logs} />
      <Route path="/newlog/" component={NewLog} />
      <Route path="/data/" component={DataSets} />
    </div>
  </Router>
);

export default class App extends Component {
  render() {
    return <AppRouter />
  }
}

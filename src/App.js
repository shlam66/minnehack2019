import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Logging from './components/Logging'

const Main = () => <h2>Home Page</h2>;
const About = () => <h2>Why Hemp?</h2>;
const Contracts = () => <h2>Contracts</h2>;
const Data = () => <h2>Data Sets</h2>;

const AppRouter = () => (
  <Router>
    <div style={{backgroundColor: "#FF0000"}}>
      <h1>HEMPTATION</h1>
      <Navbar />

      <Route path="/" exact component={Main} />
      <Route path="/about/" component={About} />
      <Route path="/contracts/" component={Contracts} />
      <Route path="/logging/" component={Logging} />
      <Route path="/data/" component={Data} />
    </div>
  </Router>
);

export default class App extends Component {
  render() {
    return <AppRouter />
  }
}

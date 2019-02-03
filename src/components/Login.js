import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import api from '../api'

import { Form, Button } from 'react-bulma-components/full'
import './Components.css'

class Login extends Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
    errors: {
      email: false,
      password: false
    }
  }

  login = async () => {
    if (!this.state.email) {
      this.setState({ errors: { email: true } })
    }
    if (!this.state.password) {
      this.setState({ errors: { password: true } })
    }
    if (this.state.email && this.state.password) {
      const response = await api.get('/owners/1')
      this.props.login(response.data)
      this.setState({ loggedIn: true })
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (this.state.loggedIn) return <Redirect push to="/" />
    return (
      <div className="login">
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input
              color={this.state.errors.email ? 'danger' : null}
              placeholder="Enter Email"
              type="email"
              onChange={this.handleInputChange}
              name="email"
              required
              value={this.state.email}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Form.Input
              color={this.state.errors.password ? 'danger' : null}
              placeholder="Enter Password"
              type="password"
              onChange={this.handleInputChange}
              name="password"
              required
              value={this.state.password}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field kind="group">
          <Form.Control>
            <Button type="primary" color="primary" onClick={this.login}>
              Submit
            </Button>
          </Form.Control>
          <Form.Control>
            <Link to="/">
              <Button>Cancel</Button>
            </Link>
          </Form.Control>
        </Form.Field>
      </div>
    )
  }
}

export default Login

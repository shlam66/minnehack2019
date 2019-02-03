import React, { Component } from 'react'
import api from '../api'
import { Field, Label, Control, Input } from 'react-bulma-components/full'

export default class Login extends Component {
  state = {
    user: null
  }

  login = async () => {
    const response = await api.get('/user/1')
    this.setState({ user: response.data })
  }

  render() {
    return (
      <div className="login">
        <Field>
          <Label>Email</Label>
          <Control>
            <Input />
          </Control>
        </Field>
      </div>
    )
  }
}

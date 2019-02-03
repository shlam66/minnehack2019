import React, { Component } from 'react'
import api from '../api'
import './Components.css'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bulma-components/full'
import { Form, Button } from 'react-bulma-components/full'

class NewContract extends Component {
  state = {
    name: '',
    email: '',
    strain: '',
    price: 0,
    acres: 0
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChange = strain => {
    this.setState({ strain })
  }

  submit = () => {
    const entry = {
        lister:{
            name: this.state.name,
            avatar_id: 1,
            email: this.state.email
        },
        farm:{
            acres: this.state.acres,
            state: "MN",
            county: "Anoka"
        },
        price: this.state.price,
        strain: {
            id:1,
            name: this.state.strain,
            //These values can be imporved upon (obviously) with using an api
            //or creating our own database for the strands that we support
            weight: Math.floor((Math.random() * 10) + 1),
            thc_content: 0.0,
            cbd_content: 20,
            planting_time: "Early October"
        }
    }
    api.post('/contracts', entry).then(res => {
      this.props.history.push('/contracts')
    })
  }

  render() {
    return (
      <div className="personalLogs">
        <h1 className="title">Create a new log</h1>

        <Form.Field>
          <Form.Label>Name:</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              onChange={this.handleInputChange}
              name="name"
              required
              value={this.state.name}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Email:</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              onChange={this.handleInputChange}
              name="email"
              required
              value={this.state.email}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Number of Acres:</Form.Label>
          <Form.Control>
            <Form.Input
              type="number"
              onChange={this.handleInputChange}
              name="acres"
              required
              value={this.state.acres}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Select the Strain:</Form.Label>
          <Form.Control>
            <Dropdown value={this.state.strain} onChange={this.onChange}>
              <Dropdown.Item value="Elektra">Elektra</Dropdown.Item>
              <Dropdown.Item value="Cherry Wine">Cherry Wine</Dropdown.Item>
              <Dropdown.Item value="Suver Haze">Suver Haze</Dropdown.Item>
              <Dropdown.Item value="Cobbler">Cobbler</Dropdown.Item>
            </Dropdown>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Price</Form.Label>
          <Form.Control>
            <Form.Input
              type="number"
              onChange={this.handleInputChange}
              name="price"
              required
              value={this.state.price}
            />
          </Form.Control>
        </Form.Field>

        
        <Form.Field kind="group">
          <Form.Control>
            <Link to="/contracts/">
              <Button type="primary" color="primary" onClick={this.submit}>
                Submit
              </Button>
            </Link>
          </Form.Control>
          <Form.Control>
            <Link to="/contracts/">
              <Button>Cancel</Button>
            </Link>
          </Form.Control>
        </Form.Field>
      </div>
    )
  }
}

export default NewContract

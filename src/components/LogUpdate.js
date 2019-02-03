import React, { Component } from 'react'
import "./Components.css"
import api from '../api'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bulma-components/full'

class LogUpdate extends Component {
    state = {
      date: '',
      pounds: '',
    }
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    onChange = strain => {
      this.setState({ strain })
    }
  
    submit = () => {
        console.log(this.props.match.params.id)

      const entry = {
        harvestEntry: {
            datetime: this.state.date,
            pounds: this.state.pounds
        }
      }

      api.patch(`/log_entries/${this.props.match.params.id}`, entry).then(res => {
        this.props.addlog()
        this.props.history.push('/logs')
      })
    }
  
    render() {
      return (
        <div className="personalLogs">
          <h1 className="title">Finished Log</h1>
  
          <Form.Field>
            <Form.Label>Date Harvested:</Form.Label>
            <Form.Control>
              <Form.Input
                type="date"
                onChange={this.handleInputChange}
                name="date"
                required
                value={this.state.date}
              />
            </Form.Control>
          </Form.Field>
  
          <Form.Field>
            <Form.Label>Pounds Harvested:</Form.Label>
            <Form.Control>
              <Form.Input
                type="number"
                onChange={this.handleInputChange}
                name="pounds"
                required
                value={this.state.pounds}
              />
            </Form.Control>
          </Form.Field>
  
          <br />
  
          <Form.Field kind="group">
            <Form.Control>
              <Link to="/logs/">
                <Button type="primary" color="primary" onClick={this.submit}>
                  Submit
                </Button>
              </Link>
            </Form.Control>
            <Form.Control>
              <Link to="/logs/">
                <Button>Cancel</Button>
              </Link>
            </Form.Control>
          </Form.Field>
  
          {/* <form>
                      Date Planted:
                      <input type="date" name="bday" onChange={this.handleInputChange}/> <br />
  
                      Number of Plants:
                      <input type="number" name="numPlants" /> <br />
  
                      Strain:
                      <Dropdown value={this.state.selected} onChange={this.onChange} color="info" {...this.props}>
                          <Dropdown.Item value="strain1">Elektra</Dropdown.Item>
                          <Dropdown.Item value="strain2">Cherry Wine</Dropdown.Item>
                          <Dropdown.Item value="strain3">Suver Haze</Dropdown.Item>
                          <Dropdown.Item value="strain4">Cobbler</Dropdown.Item>
                      </Dropdown> <br />
  
                      Number of Acres:
                      <input type="number" name="numPlants" /> <br />
  
                      <Link to="/logs"><button type="submit" value="new">Submit Log</button></Link>
                  </form> */}
        </div>
      )
    }
  }

export default LogUpdate
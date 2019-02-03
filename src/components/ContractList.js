import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import { Button } from 'react-bulma-components/full'

import ContractItem from './ContractItem'
import './Components.css'

export default class ContractList extends Component {
  state = {
    contracts: null
  }

  componentWillMount() {
    api.get('/contracts').then(response => {
      this.setState({ contracts: response.data })
    })
  }

  renderContracts = () => {
    if (this.state.contracts) {
      return this.state.contracts.map(contract => {
        return <ContractItem contract={contract} key={contract.id} />
      })
    }
  }

  render() {
    return (
      <div className="contract-list">
        {this.renderContracts()}
        <Link to="/contracts/new">
          <Button color="primary">Add New Contract</Button>
        </Link>
      </div>
    )
  }
}

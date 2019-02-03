import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import api from '../api'
import { Button } from 'react-bulma-components/full'

import ContractItem from './ContractItem'
import './Components.css'

export default class ContractList extends Component {
  state = {
    contracts: null,
    newContract: false
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
    if (this.state.newContract) return <Redirect push to="/contract/new" />
    return (
      <div className="contract-list">
        {this.renderContracts()}
        <Button
          color="primary"
          onClick={() => this.setState({ newContract: true })}
        >
          Add New Contract
        </Button>
      </div>
    )
  }
}

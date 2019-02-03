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

  renderContracts = () => {
    if (this.state.contracts) {
      return this.state.contracts.map(contract => {
        return <ContractItem contract={contract} key={contract.id} />
      })
    } else {
      return <h1>Unable to load any contracts, there may be none...</h1>
    }
  }

  render() {
    return (
      <div className="contract-list">
        <Link to="/contracts/new">
          <Button className="contract-new-btn" color="primary">
            Add New Contract
          </Button>
        </Link>
        {this.renderContracts()}
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ContractList extends Component {
  
  state = {
    contracts: [1,2,3]
  }

  renderContracts = () => {
    console.log(this.state.contracts)
    this.state.contracts.map((contract) => {
      console.log(contract)
      return <div>{contract}</div>
    });
  }
  

  render() {
    return <div>{this.renderContracts()}</div>
  }
}

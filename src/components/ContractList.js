import React, { Component } from 'react'

import ContractItem from './ContractItem'

export default class ContractList extends Component {
  
  state = {
    contracts: [
      {id:1,name:"Alec",land:500,price:65000,email:"lorim007@umn.edu"},
      {id:2,name:"Sam",land:600,price:70000,email:"hans5376@umn.edu"}
    ]
  }

  renderContracts = () => {
    // console.log(this.state.contracts)
    if (this.state.contracts != null) {
      return this.state.contracts.map((contract) => {
        // console.log(contract)
        return <ContractItem contract={contract} key={contract.id}></ContractItem>
      });
    }
    console.log("No contracts to map: <" + this.state.contracts + ">")
  }

  render() {
    return <div>{this.renderContracts()}</div>
  }
}

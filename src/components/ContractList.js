import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bulma-components/full'

import ContractItem from './ContractItem'
import './Components.css'

const renderContracts = contracts => {
  if (contracts) {
    return contracts.map(contract => {
      return <ContractItem contract={contract} key={contract.id} />
    })
  } else {
    return <h1>Unable to load any contracts, there may be none...</h1>
  }
}

const ContractList = ({ contracts }) => {
  console.log(contracts)
  return (
    <div className="contract-list">
      <Link to="/contracts/new">
        <Button className="contract-new-btn" color="primary">
          Add New Contract
        </Button>
      </Link>
      {renderContracts(contracts)}
    </div>
  )
}

export default ContractList

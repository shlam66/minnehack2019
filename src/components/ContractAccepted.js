import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

import { Button } from 'react-bulma-components/full'

import './Components.css'

const ContractBought = () => (
  <div className="personalLogs">
    <h1 className="title">Your request has been recieved!</h1>
    <p>
      Your request has been received. Due to the large ammounts of money being
      transfered, the payment process will take a while to complete. You should
      recieve an email when your contract has been fully processed. Thank you!
    </p>
    <br />
    <Link to="/contracts">
      <Button className="contract-new-btn" color="primary">
        Back to Contracts
      </Button>
    </Link>
  </div>
)

export default ContractBought

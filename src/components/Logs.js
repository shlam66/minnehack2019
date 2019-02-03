import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

const renderLogs = logs => {
  console.log(logs)
  if (logs) {
    return logs.map(log => {
      return (
        <div className="log1" key={log.id}>
          {log.num_plants}
        </div>
      )
    })
  }
}

const Logging = ({ logs }) => (
  <div className="personalLogs">
    <h1 className="title">Personal Logs</h1>

    {renderLogs(logs)}
    <div className="log1">
      <p>Planted: June 18, 2018</p>
      <p>Strain: Khalifa Kush</p>
    </div>

    <Link to="/logs/new">
      <button type="submit" value="new">
        New Log
      </button>
    </Link>
  </div>
)

export default Logging

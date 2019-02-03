import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'
import LogItem from './LogItem'
import { Button } from 'react-bulma-components/full'


const renderLogs = logs => {
  if (logs) {
    return logs.map(log => {
      return <LogItem log={log} key={log.id} />
    })
  } else {
    return <h1>Unable to load any logs, there may be none...</h1>
  }
}

const Logs = ({ logs }) => {
  return (
    <div className="contract-list">
      <h1 className="title">Personal Logs</h1>

      <Link to="/logs/new">
        <Button className="log-new-btn" color="primary">
          Add New Log
        </Button>
      </Link>
      {renderLogs(logs)}
    </div>
  )
}

export default Logs
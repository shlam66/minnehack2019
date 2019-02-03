import React from 'react'
import "./Components.css" 
import {Link} from "react-router-dom"

const Logging = () => (
    <div className="personalLogs">
        <h1 className="title">Personal Logs</h1>

        <div className="log1">
            <p>Planted: June 18, 2018</p>
            <p>Strain: Khalifa Kush</p>
        </div>

        <Link to="/logs/new"><button type="submit" value="new">New Log</button></Link>
    </div>
);

export default Logging
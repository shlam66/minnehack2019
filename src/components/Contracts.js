import React from 'react'
import "./Components.css" 
import {Link} from "react-router-dom"

const Contracts = () => (
    <div>
        <h1 className="title">Contracts</h1>

        <Link to="/contracts/new"><button type="submit" value="new">New Contract</button></Link>
    </div>
);

export default Contracts
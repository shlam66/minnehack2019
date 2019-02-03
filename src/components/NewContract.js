import React from 'react'
import "./Components.css" 
import {Link} from "react-router-dom"

const NewContract = () => (
    <div class="personalLogs">
        <h1 className="title">Create a new contract</h1>

        <Link to="/contracts"><button type="submit" value="new">Submit Contract</button></Link>
    </div>
);

export default NewContract
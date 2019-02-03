import React from 'react'
import "./Components.css" 
import {Link} from "react-router-dom"

const NewLog = () => (
    <div class="personalLogs">
        <h1 className="title">Create a new log</h1>

        

        <Link to="/logs"><button type="submit" value="new">Submit Log</button></Link>
    </div>
);

export default NewLog
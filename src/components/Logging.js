import React from 'react'
import "./Components.css" 

import {Link} from "react-router-dom"

function createLog() {

}

const Logging = () => (
    <div class="personalLogs">
        <h1>Personal Logs</h1>

        <p>
            HEMP <br />
            Strain: whatever
        </p>

        <Link to="/"><button onclick={createLog} type="submit" value="new">New Log</button></Link>
    </div>
);

export default Logging
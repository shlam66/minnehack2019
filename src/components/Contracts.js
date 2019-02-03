import React from 'react'
import "./Components.css" 
import {Link} from "react-router-dom"

import ContractList from "./ContractList"

const Contracts = () => (
    <div>
        <h1 className="title">Contracts</h1>

        <ContractList></ContractList>

        <Link to="/contracts/new"><button type="submit" value="new">New Contract</button></Link>
    </div>
);

export default Contracts
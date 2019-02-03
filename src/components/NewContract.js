import React from 'react'
import "./Components.css" 
import {Link} from "react-router-dom"

import TextBox from './TextBox'

import "./Components.css"

const NewContract = () => (
    <div class="personalLogs">
        <h1 className="title">Purpose a new contract</h1>

        <TextBox className="contract-new-field">Name</TextBox>
        <TextBox className="contract-new-field" type="number">Land (Acres)</TextBox>
        <TextBox className="contract-new-field" type="number">Price</TextBox>
        <TextBox className="contract-new-field" placeholder="johnyappleseed@apple.com">Email</TextBox>
        <br></br>
        <Link to="/contracts"><button class="button is-primary is-rounded" type="submit" >Submit Contract</button></Link>
    </div>
);

export default NewContract
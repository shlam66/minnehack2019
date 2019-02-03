import React from 'react'
import "./Components.css" 

const HomePage = () => (
    <div className="personalLogs">
        <h1 id="main-header" className="title">Welcome to Hemptation!</h1>

        <div id="body-div"></div>
        <div>
            <div id="why-hemptation">
                Hemptation is a service aimed towards farmers to help connect buyers and sellers to create an easy
                and transparent marketplace. 
                <div>
                    <div class="small-header">Contracts</div>
                    Contacts are a way to connect hemp farmers to buyers. By removing the middleman, it creates a 
                    transparent ecosystem where sellers communicate directly with the buyers. This ensures both 
                    parties know exactly what they're getting.<br/>
                    <a href="/contracts"><button class="button is-secondary btn-why">Contracts</button></a>

                    <div class="small-header">Logs</div>
                    Logs is a data recording tool that allows farmers to keep track of what works and what doesn't. 
                    Farmers can see other farmers crop strategies to increase their own crop yield.<br/>
                    <a href="/logs"><button class="button is-secondary btn-why">Logs</button></a>
                </div>

                <div></div>
            </div>
        </div>
    </div>
);

export default HomePage
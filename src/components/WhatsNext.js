import React from 'react'
import "./Components.css" 

import 'react-bulma-components/full'


import "./Components.css"

const WhatsNext = () => (
    <div class="personalLogs">
        <h1 className="title">Whats next...</h1>
        <div class="tile is-ancestor">
            <div class="tile is-child is-5">
                <p class="title">Connecting the crowd</p>
                <div class="content">
                    <p>
                        Using the community that has been created around Hemptation, we want to connect the users so that they 
                        may not only use our service as a tool, but also other users that have valuable information to share based 
                        off of their own discoveries.
                    </p>
                </div>
            </div>
            <div class="tile is-child">
                <p class="title">Expanding our Database</p>
                <div class="content">
                    <p>
                        There are many helpful tools out there available to the public that can give lots of
                        insight and helpful information about the best way to grow crops and raise livestock. Implementation
                        of these tools can give a farmer a better quantitative reason as to why their crops turned out why they did,
                        and help them to better improve their plan for next growing season. 
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default WhatsNext
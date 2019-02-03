import React, { Component } from 'react'
import "./Components.css" 
import api from '../api'


class LogDetail extends Component {
    state = {
        log: null
    }

    componentWillMount() {
        api.get(`/log_entries/${this.props.match.params.id}`).then(response => {
            console.log(response.data)
            this.setState({ log: response.data })
        })
    }

    render() {
        return (
            <div>
                <h1 className="title">Log Details</h1>

                <h3 className="subtitle">Initial Entry</h3>

                Strain: 
                <p>{this.state.log.plantEntry.strain}</p>

                Planted on: 
                <p>{this.state.log.plantEntry.datetime}</p>

                Number of plants: 
                <p>{this.state.log.plantEntry.num_plants}</p>

                Acres Used: 
                <p>{this.state.log.plantEntry.num_acres}</p>

                <h3 className="subtitle">Final Harvest</h3>

                Harvested on: 
                <p>{this.state.log.harvestEntry.datetime}</p>

                Pounds Harvested: 
                <p>{this.state.log.harvestEntry.pounds}</p>
            </div>
        )
    }
}

export default LogDetail
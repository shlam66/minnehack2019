import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

const HomePage = () => (
  <div className="home-container">
    <h1 id="main-header" className="title">
      Welcome to Hemptation!
    </h1>

    <div>
      <div id="home-picture-div" />
      <div className="black-box-text">
        <div className="black-box-format">
          <p>
            Hemptation is a service aimed towards farmers to help connect buyers
            and sellers to create an easy and transparent marketplace.{' '}
          </p>
          <div>
            <div className="small-header">Contracts</div>
            <p>
              Contacts are a way to connect hemp farmers to buyers. By removing
              the middleman, it creates a transparent ecosystem where sellers
              communicate directly with the buyers. This ensures both parties
              know exactly what they're getting.
            </p>
            <Link to="/contracts">
              <button className="button is-secondary btn-why">Contracts</button>
            </Link>

            <div className="small-header">Logs</div>
            <p>
              Logs is a data recording tool that allows farmers to keep track of
              what works and what doesn't. Farmers can see other farmers crop
              strategies to increase their own crop yield.
            </p>
            <Link to="/logs">
              <button className="button is-secondary btn-why">Logs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage

import React from 'react'
import { Link } from 'react-router-dom'

import HempLogo from '../assets/HemptationLogo.png'

const toggleMenu = e => {
  e.target.classList.toggle('is-active')
  document.querySelector('#navbar').classList.toggle('is-active')
}

const Navbar = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <div className="navbar-item">
        <img src={HempLogo} width="112" height="28" alt="Hemptation Logo" />
      </div>

      <div
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        onClick={toggleMenu}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </div>
    </div>

    <div id="navbar" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>

        <Link to="/about" className="navbar-item">
          Why Hemp?
        </Link>

        <Link to="/contracts" class="navbar-item">
          Contracts
        </Link>

        <Link to="/logs" class="navbar-item">
          Logs
        </Link>

        <Link to="/data" class="navbar-item">
          Data Sets
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-primary">
              <strong>Sign up</strong>
            </button>
            <button className="button is-light">Log in</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar

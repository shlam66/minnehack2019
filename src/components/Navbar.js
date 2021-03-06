import React from 'react'
import { Link } from 'react-router-dom'

import HempLogo from '../assets/HemptationLogo.png'

const toggleMenu = e => {
  document.querySelector('#burger').classList.toggle('is-active')
  document.querySelector('#navbar').classList.toggle('is-active')
}

const Navbar = ({ user, logout }) => (
  <nav
    className="navbar is-fixed-top is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src={HempLogo} width="112" height="28" alt="Hemptation Logo" />
      </Link>

      <div
        className="navbar-burger burger"
        id="burger"
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
        <Link to="/" className="navbar-item" onClick={toggleMenu}>
          Home
        </Link>

        <Link to="/about" className="navbar-item" onClick={toggleMenu}>
          Why Hemp?
        </Link>

        <Link to="/contracts" className="navbar-item" onClick={toggleMenu}>
          Contracts
        </Link>

        <Link to="/logs" className="navbar-item" onClick={toggleMenu}>
          Logs
        </Link>

        <Link to="/next" className="navbar-item" onClick={toggleMenu}>
          What's Next
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {user ? (
              <Link to="/login">
                <button className="button is-info" onClick={logout}>
                  Log Out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="button is-primary">Log In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar

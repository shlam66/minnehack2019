import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
          alt="Hemptation Logo"
        />
      </a>

      <button
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <Link to="/" class="navbar-item">
          Home
        </Link>

        <Link to="/about" class="navbar-item">
          Why Hemp?
        </Link>

        <div class="navbar-item has-dropdown is-hoverable">
          <Link to="#" class="navbar-link">
            More
          </Link>

          <div class="navbar-dropdown">
            <Link to="/" class="navbar-item">
              About
            </Link>
            <Link to="/" class="navbar-item">
              Jobs
            </Link>
            <Link to="/" class="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-primary">
              <strong>Sign up</strong>
            </button>
            <button class="button is-light">Log in</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar

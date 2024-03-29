import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import gsap from "gsap"

// Images
import Logo from "../../images/logo.png"


export default function HeaderTablet() {

  const [nav, setNav] = useState(false);


  /* ----- Get The NavBar ----- */
  // const navbar = document.getElementById('headerTablet');

  const toggledNavbar = (e) => {
    e.preventDefault();
    setNav(!nav ? true : false)
  }

  useEffect(() => {
    if (!nav) {
      gsap.to('#navbarNavDropdown', { display: 'none', opacity: 0, duration: 0.8 });
      gsap.to('nav', { backgroundColor: 'transparent', duration: 1 });
      gsap.to('.toggler-span', { backgroundColor: 'white', duration: 1 });

    } else {
      gsap.to('#navbarNavDropdown', { display: 'block', opacity: 1, duration: 0.8 });
      gsap.to('nav', { backgroundColor: 'white', duration: 0.2 });
      gsap.to('.toggler-span', { backgroundColor: 'black', duration: 1 });

    }
  }, [nav])


  return (
    <div id="headerTablet">

      <nav className="navbar navbar-expand-xl">

        {/* ----- Logo ----- */}
        <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo Jordan Philippot développeur fullstack" /></Link>

        {/* ----- Button toggled responsive  ----- */}
        <button onClick={toggledNavbar} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-span"></span>
          <span className="toggler-span"></span>
          <span className="toggler-span"></span>
        </button>

        {/* ----- Dropdown on click ----- */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav mr-auto">

            <div className="dropdown-divider"></div>

            <li className="nav-item">
              <Link to="/#home">Accueil</Link>
            </li>

            <div className="dropdown-divider" id="assistant-hr"></div>


            <li className="nav-item">
              <Link to="/#about">À propos</Link>
            </li>

            <div className="dropdown-divider" id="assistant-hr"></div>

            <li className="nav-item">
              <Link to="/#projects">Projets</Link>
            </li>

            <div className="dropdown-divider"></div>

            <li className="nav-item">
              <Link to="/#contact">Contact</Link>
            </li>

          </ul>

        </div>
        {/* ----- End Dropdown ----- */}

      </nav>

    </div>
  )
}
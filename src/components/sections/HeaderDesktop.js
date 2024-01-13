import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../images/logo.png";

export default function HeaderDesktop() {
  return (
    <div id="headerDesktop">
      <nav className="navbar navbar-expand-xl">
        {/* ----- Logo ----- */}
        <Link className="navbar-brand" to="/">
          <img alt={"Aliz Logo"} src={Logo} />
        </Link>

        <div className="collapse navbar-collapse">
          {/* ----- Nav right ----- */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/#home"}>Accueil</Link>
            </li>

            <li className="nav-item">
              <Link to={"/#about"}>À propos</Link>
            </li>

            <li className="nav-item">
              <a href={"/#projects"}>Projets</a>
            </li>

            <li className="nav-item">
              <Link to={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

// Images
import Logo from "../../images/logo.png"

// Packages 
import gsap from "gsap"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Footer() {

  const footerLogo = useRef()
  const footerHidden = useRef()

  const clickLogo = () => {
    const tl = gsap.timeline()
    tl.to(footerLogo.current, { y: "100%", duration: 0.3 })
    tl.to(footerLogo.current, { display: 'none', duration: 0, delay: 0.5 })
    tl.to(footerHidden.current, { y: 0, display: 'inline-block', duration: 0.7, ease: "ease-in-out" })
  }

  return (
    <footer>
      {/* ----- LOGO ANIMATION ----- */}
      <div id="logo-animation" onClick={clickLogo} ref={footerLogo}>
        <div>
          <img
            alt={"Aliz Logo"}
            src={Logo} />
        </div>
      </div>

      <div id="footer-hidden" ref={footerHidden}>
        <ul>
          <li>
            <Link to={"/#home"}>Accueil</Link>
          </li>

          <li>
            <Link to={"/#about"}>À propos</Link>
          </li>

          {/* ----- LOGO CENTER ----- */}
          <li>
            <Link to="/#home">
              <LazyLoadImage
                alt={"Aliz Logo"}
                src={Logo}
                effect="blur" />
            </Link>
          </li>

          <li>
            <a href={"/#projects"}>Projets</a>
          </li>

          <li>
            <Link to={"/#cv"}>CV</Link>
          </li>

        </ul>
      </div>


    </footer >
  )
}

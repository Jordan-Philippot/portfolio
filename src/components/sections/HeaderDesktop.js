import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Images
import Logo from "../../images/logo.png"

// Packages 
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function HeaderDesktop() {

    const headerRef = useRef()


    // ScrollTrigger.create({
    //     start: "top top",
    //     end: 99999,
    //     onUpdate: (self) => {
    //         // console.log(self.direction)
    //         if (self.direction) {
    //             gsap.set(headerRef.current,

    //                 {
    //                     y: "-100%",
    //                     // paused: true,
    //                 }
    //             );

    //         } else if (!self.direction) {
    //             gsap.set(
    //                 headerRef.current,

    //                 {
    //                     y: 0,
    //                     // paused: true,
    //                 }
    //             );

    //         }
    //     }
    // });




    return (
        <div id="headerDesktop" ref={headerRef}>
            <nav className="navbar navbar-expand-xl">

                {/* ----- Logo ----- */}
                <Link className="navbar-brand" to="/">
                    <img
                        alt={"Aliz Logo"}
                        src={Logo} />
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
    )
}
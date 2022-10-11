import React, { useEffect, useState } from 'react'

// Packages
import gsap, { Power4 } from 'gsap';

// Images
import EllipseLogo from '../../images/logo.png'

// Components
import Cursor from './Cursor';

export default function Loader() {
    const [loaded, setLoaded] = useState(false)

    /* ----- On text hover, change scale cursor ----- */
    const blobCursor = () => {
        const CURSOR = document.querySelector('.cursor-dot-outline');
        const LINKS = document.querySelectorAll('p');

        const setCursorHover = () => CURSOR.style.transform = 'scale(2.5)';
        const removeCursorHover = () => CURSOR.style.transform = '';
        LINKS.forEach(link => link.addEventListener('mouseover', setCursorHover));
        LINKS.forEach(link => link.addEventListener('mouseleave', removeCursorHover));
    };

    useEffect(() => {
        setLoaded(true)

        gsap.fromTo('#dev', { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 2, ease: Power4 })
        gsap.fromTo('#fullstack', { x: 500, opacity: 0 }, { x: 0, opacity: 1, duration: 2, ease: Power4 })
    }, [])


    useEffect(() => {
        if (loaded) {
            blobCursor()
        }
    }, [loaded])


    return (
        <div id="loader">

            <Cursor />

            {/* ----- Blob on center ----- */}
            <div id="blob-white-animated"></div>

            <div id="dev" className="title-loader">
                <p className="glitch-text">Développeur</p>
            </div>

            <div id="fullstack" className="title-loader">
                <p className="glitch-text">Fullstack</p>
            </div>

            <img src={EllipseLogo} alt="logo Jordan Philipot développeur web fullstrack react symfony" id="loader-logo" />

            <div id="flash"></div>

            <div id="hole">
                {/* ----- Animation ----- */}
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div >
    )
}

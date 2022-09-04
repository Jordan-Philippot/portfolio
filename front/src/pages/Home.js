import React, { useEffect, useState, useRef } from 'react'

// ----- Components -----

// ----- Images ----- 
import Profile from '../images/AvatarMaker.png'

// ----- Packages -----
import gsap from 'gsap';
// import { useParallax } from 'react-scroll-parallax';


export default function Home() {
  const [isScrolled, setIsScrolled] = useState("load")

  const firstBlock = useRef()
  const secondBlock = useRef()
  const thirdBlock = useRef()

  useEffect(() => {
    gsap.to(".blob", { visibility: "visible", delay: 0.3 })
  }, [])

  window.onscroll = function (ev) {
    console.log(window.innerHeight, firstBlock.current.offsetHeight)
    if (window.scrollY > (firstBlock.current.offsetHeight - window.innerHeight) + 101) {
      setIsScrolled("true")
    } else {
      setIsScrolled("false")

    }
  };


  useEffect(() => {
    console.log(firstBlock)
    if (isScrolled === "true") {

      gsap.to(".waves", {
        minHeight: "1500vh",
        maxHeight: "1500vh",
        height: "1500vh",
        duration: 0.3
      })
      gsap.to(".waves", {
        minHeight: "100px",
        maxHeight: "150px",
        heigh: "100px",
        duration: 1,
        delay: 0.3
      })

      setTimeout(() => {
        window.scrollTo({
          top: firstBlock.current.clientHeight,
          behavior: 'smooth'
        });
      }, 500);

    } else if (isScrolled === "false") {
      gsap.to(".waves", {
        minHeight: "100px",
        maxHeight: "150px",
        heigh: "100px",
        duration: 0.5,
      })

    }
  }, [isScrolled])


  return (
    <div id="home">


      {/* ----- WAVES ----- */}
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto" >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
      {/* ----- END WAVES -----  */}


      {/* ----- FIRST PAGE ----- */}
      <div id="firstPage" className="container-fluid" ref={firstBlock}>

        <div className="content">
          <div className="blob"><img src={Profile} alt="profile" /></div>


          <div className="reveal-text">
            <h1 >
              HELLO! I am Jordan Philippot,
              titulated of web
              developer - integrator
              at Epitech, web
              application CONCEPTOR
              at INSTIC AND DEVELOPER
              FULLSTACK
            </h1>
          </div>
        </div>


        {/* TEXT BACKGROUND */}
        <div className="text-background">
          <p id="text-background-react">REACT</p>
          <p id="text-background-symfony">SYMFONY</p>
        </div>

      </div>
      {/* ----- END FIRST PAGE ----- */}




      {/* ----- SECOND PAGE ----- */}
      <div id="secondPage" className="container-fluid" ref={secondBlock}>

        <p className="m-auto"> COUCOU PETITE PERRUCHE</p>
      </div>
      {/* ----- END SECOND PAGE ----- */}


      {/* ----- THIRD PAGE ----- */}
      <div id="thirdPage" className="container-fluid" ref={thirdBlock}>

        <p className="m-auto"> Okkkkkkk</p>
      </div>
      {/* ----- END THIRD PAGE ----- */}


    </div>
  )
}

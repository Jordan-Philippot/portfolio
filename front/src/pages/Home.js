import React, { useEffect, useState, useRef } from 'react'

// ----- Components -----
import FirstBlock from '../components/firstBlock/FirstBlock';
import SecondBlock from '../components/secondBlock/SecondBlock';
import ThirdBlock from '../components/thirdBlock/ThirdBlock';

import Waves from '../components/Waves';


// ----- Packages -----
import gsap from 'gsap';


export default function Home() {
  const [isScrolled, setIsScrolled] = useState("load")


  // ----- Refs ----- 
  const firstBlockRef = useRef()
  const secondBlockRef = useRef()
  const thirdBlockRef = useRef()

  const wavesRef = useRef()


  useEffect(() => {
    gsap.to(".blob", { visibility: "visible", delay: 0.3 })
  }, [])

  window.onscroll = function (ev) {
    // setIsScrolledFirst, setIsScrolledSecond?? smooth scroll for each component
    if (window.scrollY > (firstBlockRef.current.offsetHeight - window.innerHeight) + 101) {
      setIsScrolled("true")
    } else {
      setIsScrolled("false")
    }
  };


  useEffect(() => {
    if (isScrolled === "true") {

      // gsap.to(wavesRef.current, {
      //   minHeight: "1500vh",
      //   maxHeight: "1500vh",
      //   height: "1500vh",
      //   duration: 0.3
      // })
      // gsap.to(wavesRef.current, {
      //   minHeight: "100px",
      //   maxHeight: "150px",
      //   heigh: "100px",
      //   duration: 1,
      //   delay: 0.3
      // })

      setTimeout(() => {
        window.scrollTo({
          top: firstBlockRef.current.clientHeight,
          behavior: 'smooth'
        });
      }, 500);

    } else if (isScrolled === "false") {
      // gsap.to(wavesRef.current, {
      //   minHeight: "100px",
      //   maxHeight: "150px",
      //   heigh: "100px",
      //   duration: 0.5,
      // })
    }
  }, [isScrolled])


  return (
    <div id="home">

      {/* ----- WAVES ----- */}
      <Waves wavesRef={wavesRef}/>


      {/* ----- FIRST BLOCK ( PRESENTATION ) ----- */}
      <FirstBlock firstBlockRef={firstBlockRef} />

      {/* ----- SECOND BLOCK ( MY PROJETCS ) ----- */}
      <SecondBlock secondBlockRef={secondBlockRef} />

      {/* ----- THIRD BLOCK ( ABOUT ME ) ----- */}
      <ThirdBlock thirdBlockRef={thirdBlockRef} />


    </div>
  )
}

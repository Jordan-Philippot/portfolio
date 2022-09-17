import React, { useEffect, useRef } from 'react'


// ----- Components -----
import FirstBlock from '../components/firstBlock/FirstBlock';
import SecondBlock from '../components/secondBlock/SecondBlock';
import ThirdBlock from '../components/thirdBlock/ThirdBlock';


// ----- Packages -----
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home({ location }) {

  // const [isScrolled, setIsScrolled] = useState("load")

  // ----- Refs ----- 
  const firstBlockRef = useRef()
  const secondBlockRef = useRef()
  const thirdBlockRef = useRef()


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".blob", { visibility: "visible", delay: 0.3 })
  }, [])

  // ----- Title animation -----
  const titles = document.querySelectorAll('h2');

  titles.forEach((title, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: 'top-=700',
        toggleActions: 'play none none reverse',
        end: () => `+=${title.clientHeight / 2}`,
        markers: false
      }
    });
    tl.fromTo(title, {
      opacity: 0,
    },
      {
        opacity: 1,
        ease: Power2,
        duration: 1
      }
    );
  })

  useEffect(() => {
    switch (location.hash) {
      case "#home":
        firstBlockRef.current.scrollIntoView()
        break;
      case "#projects":
        secondBlockRef.current.scrollIntoView()
        break;
      case "#about":
        thirdBlockRef.current.scrollIntoView()
        break;
      default:
        break;
    }
  }, [location])


  // window.onscroll = function (ev) {
  //   if (window.scrollY > (firstBlockRef.current.offsetHeight - window.innerHeight) + 101) {
  //     setIsScrolled("true")
  //   } else {
  //     setIsScrolled("false")
  //   }
  // };


  // useEffect(() => {
  // if (isScrolled === "true") {

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

  // setTimeout(() => {
  //   window.scrollTo({
  //     top: firstBlockRef.current.clientHeight,
  //     behavior: 'smooth'
  //   });
  // }, 500);

  // } else if (isScrolled === "false") {
  // gsap.to(wavesRef.current, {
  //   minHeight: "100px",
  //   maxHeight: "150px",
  //   heigh: "100px",
  //   duration: 0.5,
  // })
  // }
  // }, [isScrolled])


  return (
    <div id="home">

      {/* ----- FIRST BLOCK ( PRESENTATION ) ----- */}
      <FirstBlock firstBlockRef={firstBlockRef} />

      {/* ----- SECOND BLOCK ( MY PROJETCS ) ----- */}
      <SecondBlock secondBlockRef={secondBlockRef} />

      {/* ----- THIRD BLOCK ( ABOUT ME ) ----- */}
      <ThirdBlock thirdBlockRef={thirdBlockRef} />


    </div>
  )
}

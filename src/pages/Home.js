import React, { useEffect, useRef, useState } from 'react'


// ----- Components -----
import PresentationComponent from '../components/home/presentation/Presentation';
import ProjectsComponent from '../components/home/myProjects/Projects';
import AboutComponent from '../components/home/about/About';
import ContactMeComponent from '../components/home/contactMe/contactMe';


// ----- Packages -----
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home({ location, setIsScrolledAboutUs }) {


  // ----- Refs ----- 
  const PresentationComponentRef = useRef()
  const ProjectsComponentRef = useRef()
  const AboutComponentRef = useRef()
  const ContactMeComponentRef = useRef()


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
        PresentationComponentRef.current.scrollIntoView()
        break;
      case "#about":
        AboutComponentRef.current.scrollIntoView()
        break;
      case "#projects":
        ProjectsComponentRef.current.scrollIntoView()
        break;
      case "#contact":
        ContactMeComponentRef.current.scrollIntoView()
        break;
      default:
        break;
    }
  }, [location])


  window.onscroll = function (ev) {
    if (window.scrollY > (PresentationComponentRef.current.offsetHeight - window.innerHeight) + 101 && window.scrollY < (PresentationComponentRef.current.offsetHeight - window.innerHeight) + 101 + AboutComponentRef.current.offsetHeight) {
      setIsScrolledAboutUs("true")
    } else {
      setIsScrolledAboutUs("false")
    }
  };


  // useEffect(() => {
  // if (isScrolledAboutUs === "true") {

  //   gsap.to(wavesRef.current, {
  //     minHeight: "1500vh",
  //     maxHeight: "1500vh",
  //     height: "1500vh",
  //     duration: 0.3
  //   })

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

  // } else if (isScrolledAboutUs === "false") {
  // gsap.to(wavesRef.current, {
  //   minHeight: "100px",
  //   maxHeight: "150px",
  //   heigh: "100px",
  //   duration: 0.5,
  // })
  // }
  // }, [isScrolled])


  return (
    <div id="homepage" className="page">

      {/* ----- PRESENTATION ----- */}
      <PresentationComponent PresentationComponentRef={PresentationComponentRef} />

      {/* ----- ABOUT ME ----- */}
      <AboutComponent AboutComponentRef={AboutComponentRef} />

      {/* -----  MY PROJETCS ----- */}
      <ProjectsComponent ProjectsComponentRef={ProjectsComponentRef} />

      {/* ----- CONTACT ME ----- */}
      <ContactMeComponent ContactMeComponentRef={ContactMeComponentRef} />

    </div>
  )
}

import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// ----- Packages -----
import gsap, { Power1 } from 'gsap'

export default function OneProject({ project }) {

    const navigate = useNavigate();

    // ----- Responsive -----
    let windowWidth = window.innerWidth;
    const [IsDesktop, setIsDesktop] = useState('')

    useEffect(() => {
        if (windowWidth > 768) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
        }
    }, [windowWidth])


    // ----- Ref -----
    const hoverContainerRef = useRef()
    const imageProjectRef = useRef()
    const infoProjectRef = useRef()
    const blockInfoRef = useRef()


    // ----- On Title hover, reveal and hide animation image -----
    const revealImage = () => {
        var tl = gsap.timeline();
        tl.to(hoverContainerRef.current, { display: 'flex', duration: 0.1, ease: Power1.easeInOut })
        tl.to(imageProjectRef.current, { display: 'block', scale: 1, duration: .3, ease: Power1.easeInOut })
        if (IsDesktop) {
            tl.to(imageProjectRef.current, { borderRadius: "6px", width: "587px", duration: .2, ease: Power1.easeInOut })
        } else {
            tl.to(imageProjectRef.current, { borderRadius: "6px", width: "99vw", duration: .2, ease: Power1.easeInOut })
        }
        tl.to(infoProjectRef.current, { display: 'block', x: "0", delay: .3, duration: 0.2, ease: Power1.easeIn })
        tl.to(hoverContainerRef.current, { boxShadow: "15px 15px 15px 1px rgba(255, 255, 255, 0.3)", duration: 0.2, ease: Power1 })
        tl.to(blockInfoRef.current, { opacity: 1, y: 0, duration: 0.2, ease: Power1 })
    }

    const hideImage = () => {
        var tl = gsap.timeline();
        tl.to(hoverContainerRef.current, { boxShadow: "unset", duration: 0.2, ease: Power1 })
        tl.to(blockInfoRef.current, { opacity: 0, y: "50px", duration: 0.2, ease: Power1 })
        tl.to(infoProjectRef.current, { display: 'none', x: '-480px', duration: 0.4, ease: Power1.easeIn })
        if (IsDesktop) {
            tl.to(imageProjectRef.current, { borderRadius: "50%", width: "300px", duration: .3, ease: Power1.easeInOut })
        } else {
            tl.to(imageProjectRef.current, { borderRadius: "50%", width: "50vw", duration: .3, ease: Power1.easeInOut })
        }
        tl.to(imageProjectRef.current, { display: 'none', scale: 0, duration: .3, ease: Power1.easeInOut })
        tl.to(hoverContainerRef.current, { display: 'none', duration: 0.3, ease: Power1.easeInOut })
    }


    return (
        <div className="oneProject" onMouseEnter={() => revealImage()} onMouseLeave={() => hideImage()} onClick={() => navigate('/project/' + project?.id)}>
            <div className="hoverContainer" ref={hoverContainerRef}>
                <div className="imageProject" ref={imageProjectRef}>
                    <div className="infoProject" ref={infoProjectRef}>
                        <div className="container-info" ref={blockInfoRef}>
                            <h3>{project?.titleHover}</h3>

                            <p>{project?.shortDescription} </p>
                            <b>{project?.tools}</b>
                        </div>
                    </div>
                </div>
            </div>
            <p className="titleProject">{project?.title}</p>
        </div>
    )
}

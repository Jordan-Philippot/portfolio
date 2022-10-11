// ----- Packages -----
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ----- Constants -----
import { animationDirection } from '../constants/animationDirection'


export const revealText = (element, toLeftOrRight, delay, duration) => {
    if (toLeftOrRight === animationDirection.TOLEFT) {
        const tl = gsap.timeline();
        tl.fromTo(element,
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: Power2,
                duration: duration,
                delay: delay,
            }
        );
        tl.play()

    } else {
        const tl = gsap.timeline();
        tl.fromTo(element,
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: Power2,
                duration: duration,
                delay: delay,

            }
        );
        tl.play()
    }

}



export const scrollReveal = (element, abscissaX) => {

    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(element);


    sections.forEach((section, index) => {
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: section,
                    start: 'top-=800',
                    toggleActions: 'play none none reverse',
                    end: () => `+=${section.clientHeight / 2}`,
                    markers: false
                }
            }
        );
        if (abscissaX) {
            tl.fromTo(section,
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    ease: Power2,
                    duration: 2,
                }
            );
        } else {
            tl.fromTo(section,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: Power2,
                    duration: 2,
                }
            );
        }

    })
}
import gsap, { Power2 } from 'gsap'

export const revealText = (element, toLeftOrRight, delay, duration) => {
    if (toLeftOrRight === "toLeft") {
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
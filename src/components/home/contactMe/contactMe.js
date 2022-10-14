import React, { useState, useEffect, useRef } from 'react'

// ----- Packages -----
import gsap, { Power4 } from 'gsap'
import emailjs, { init } from '@emailjs/browser';

// ----- Images -----
import PhoneSvg from "../../../images/contact/phone.svg";
// import AtSvg from "../../../images/contact/at.svg";
import SendSvg from "../../../images/contact/send.svg";
import GithubSvg from "../../../images/contact/github.svg";
import LinkedinSvg from "../../../images/contact/linkedin.svg";
import Spiral from "../../../images/spiral.svg";

// ----- Component -----
import ModalContact from "./ModalContact";




export default function ContactMe({ ContactMeComponentRef }) {
    init(process.env.REACT_APP_EMAILJS_PK);

    const [openModal, setOpenModal] = useState(false)

    const clickMeRef = useRef()

    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    useEffect(() => {
        gsap.fromTo('#spiral', { rotation: 0 }, { rotation: 360, duration: 20, repeat: -1 })
    }, [])

    const data = {
        "email": email,
        "phone": phone
    }

    const showContact = () => {
        const tl = gsap.timeline()
        gsap.fromTo(clickMeRef.current, { opacity: 1, display: 'block', scale: 1 }, { opacity: 0, display: 'none', scale: 0.4, duration: 1 })
        gsap.fromTo("#secondContact", { display: 'none', scale: 0.3 }, { display: 'flex', duration: 1, scale: 1, delay: .8, ease: Power4 })
        tl.fromTo('#spiral', { rotation: 0 }, { rotation: 360, duration: 1.5, scale: 0, delay: 1 })
        tl.to('#blob-white-animated', { width: "400px", height: "400px", top: "calc(50% - 220px)", left: "calc(50% - 200px)", duration: .8 })

        tl.set("#spiral", { display: 'none' })

        if (window.innerWidth > 1200) {
            gsap.fromTo("#firstContact", { display: 'none', top: "50%", left: "50%", scale: 0.3 }, { display: 'flex', top: "35%", left: "42%", scale: 1, duration: 2, delay: 1.5, ease: Power4 })
            gsap.fromTo("#thirdContact", { display: 'none', top: "50%", left: "50%", scale: 0.3 }, { display: 'flex', top: "35%", left: "58%", scale: 1, duration: 2, delay: 1.5, ease: Power4 })
            gsap.to("#firstContact", { left: "34%", duration: 2, delay: 2, ease: Power4 })
            gsap.to("#thirdContact", { left: "66%", duration: 2, delay: 2, ease: Power4 })
        } else {
            gsap.fromTo("#firstContact", { display: 'none', top: "50%", scale: 0.3 }, { display: 'flex', top: "25%", scale: 1, duration: 1, delay: 0.8, ease: Power4 })
            gsap.fromTo("#thirdContact", { display: 'none', top: "50%", scale: 0.3 }, { display: 'flex', top: "75%", scale: 1, duration: 1, delay: 0.8, ease: Power4 })
            gsap.to("#contact", { minHeight: '1300px', delay: 1.3 })
        }


    }

    const contactSubmit = () => {
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_GMAIL,
            process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT,
            data
        )
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setOpenModal(true)
            }, function (error) {
                console.log('FAILED...', error);
            });
    }



    return (
        <section id="contact" className="page" ref={ContactMeComponentRef}>

            {/* ----- Blob on center ----- */}
            <div id="blob-white-animated"></div>


            {openModal &&
                <ModalContact setOpenModal={setOpenModal} />
            }

            <h2>Contact</h2>
            <img src={Spiral} alt="spiral" id="spiral" />

            <div id="clickMe" onClick={showContact} ref={clickMeRef}>
                <div className="btn-whatsapp-pulse">
                    <img src={PhoneSvg} alt='téléphone' />
                </div>
                <p>Répondre</p>
            </div>



            <div className="contact-type" id='firstContact'>
                <div className="contact-flex">
                    <img src={SendSvg} alt='arobase' />
                    <p>jordan.philippot.pro@gmail.com</p>
                </div>
                <div className="contact-flex">
                    <img src={PhoneSvg} alt='téléphone' />
                    <p>07 81 19 74 38</p>
                </div>

            </div>



            <div className="contact-type" id='secondContact'>
                <div className="contact-flex">
                    <img src={PhoneSvg} alt='formulaire' />
                    <input
                        value={phone}
                        id="phone"
                        type="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Téléphone"
                        className="form-controls"
                        required={true}
                    />
                </div>

                <div className="contact-flex">
                    <img src={SendSvg} alt='formulaire' />
                    <input
                        value={email}
                        id="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="form-controls"
                        required={true}
                    />
                </div>

                <button onClick={contactSubmit} className="btn-default btn-black">Envoyer</button>
            </div>



            <div className="contact-type" id='thirdContact'>
                <div className="contact-flex">
                    <a href={process.env.REACT_APP_GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="contact-social-media" > <img src={GithubSvg} alt='github' /></a>
                </div>
                <div className="contact-flex">
                    <a href={process.env.REACT_APP_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="contact-social-media"><img src={LinkedinSvg} alt='linkedin' /></a>
                </div>
            </div>


        </section>
    )
}

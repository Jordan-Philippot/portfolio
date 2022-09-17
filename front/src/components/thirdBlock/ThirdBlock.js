import React, { useRef } from 'react'

// ----- Packages -----
import gsap, { Power2 } from 'gsap'


export default function ThirdBlock({ thirdBlockRef }) {


    const smokyPresentationRef = useRef()
    const smokyDescriptionnRef = useRef()

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: smokyPresentationRef.current,
            start: 'top-=800',
            toggleActions: 'play none none reverse',
            end: () => `+=${smokyPresentationRef.clientHeight / 2}`,
            markers: false
        }
    });
    tl2.fromTo(smokyPresentationRef.current,
        {
            backgroundImage: 'linear-gradient(90deg, #000, #fff, #000)',
            backgroundPosition: '-500%',
        },
        {
            backgroundImage: 'linear-gradient(90deg, #000, #fff, #000)',
            backgroundPosition: '500%',
            ease: Power2,
            duration: 2,
            delay: 0,

        }
    );
    tl2.fromTo(smokyPresentationRef.current,
        {
            backgroundPosition: '500%',
        },
        {
            backgroundPosition: '0',
            backgroundImage: 'linear-gradient(90deg, #fff, #fff, #fff)',
            backgroundSize: '100%%',
            ease: Power2,
            delay: 0,
            duration: 1
        }
    );
    tl2.fromTo(smokyDescriptionnRef.current,
        {
            backgroundImage: 'linear-gradient(90deg, #000, #fff, #000)',
            backgroundPosition: '-500%',
        },
        {
            backgroundPosition: '0',
            backgroundImage: 'linear-gradient(90deg, #fff, #fff, #fff)',
            backgroundSize: '100%%',
            ease: Power2,
            delay: 0,
            duration: 1
        }
    );




    return (
        <section id="about" className="container-fluid" ref={thirdBlockRef}>
            <h2>À propos</h2>

            {/* <svg id="visual" className="roundedBackground" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g fill="#4478ffc5"><circle r="89" cx="692" cy="429"></circle><circle r="6" cx="437" cy="357"></circle><circle r="49" cx="192" cy="468"></circle><circle r="77" cx="251" cy="125"></circle><circle r="11" cx="456" cy="161"></circle><circle r="65" cx="634" cy="225"></circle><circle r="83" cx="771" cy="98"></circle><circle r="9" cx="93" cy="258"></circle></g></svg> */}

            <div className="container-about">
                <p id="about-presentation" ref={smokyPresentationRef}>
                    APRÈS AVOIR DECOUVER LE DEVELOPPEMENT WEB EN 2019, JE ME SUIS FORMÉ AU SEIN D’EPITECH LYON DURANT
                    2 ANNEES, CE QUI M’A PERMIS D’ACQUERIR RAPIDEMENT DES COMPÉTENCES ET DE L’AUTONOMIE GRACE A LEUR
                    PÉDAGOGIE  BASÉ SUR LES PROJETS ET L’ENTRAIDE.


                    DEVELOPPEUR FULLSTACK DEPUIS 2 ANS AU SEIN DE TED CONSULTING,
                    UNE START UP PURE PLAYER RPA ET DATA-VIZ, J’AI ÉTÉ EN CHARGE DU DÉVELOPPEMENT ET
                    DE L’ÉVOLUTION DES SITES WEB.
                </p>


                <div className="hr-dotted"></div>


                <div id="about-description" ref={smokyDescriptionnRef}>

                    <div className="skills">
                        <h3>Mes compétences</h3>

                        <div>
                            <p>API REST </p>
                            <p>STRIPE (système de paiement CB / SEPA) </p>
                            <p>CREATION d’espace client / ADMIN </p>
                            <p>LISTENERS D’’ENTITÉS</p>
                            <p>MODELISATION DE BDD </p>
                            <p>création de webhook</p>
                            <p>mise en place de services </p>
                            <p>tâches CRON </p>
                            <p>ENVOIE AUTOMATISÉ DE SMS / EMAIL </p>
                            <p>CREATION ET INTEGRATION DE MAQUETTES</p>
                        </div>

                    </div>

                    <div className="langage">
                        <h3>LANGUAGES ET OUTILS </h3>

                        <div>
                            <p>JAVASCRIPT </p>
                            <p>sql / nosql </p>
                            <p>REACT </p>
                            <p>SYMFONY</p>
                            <p>nodejs / express</p>
                            <p>GSAP animation</p>
                            <p>SASS </p>
                            <p>GITHUB </p>
                            <p>FIGMA </p>
                            <p>SENDINBLUE</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

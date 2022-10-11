import React, { useRef, useState } from 'react'

// ----- Packages -----
import gsap, { Power2 } from 'gsap'

// ----- Services -----
import { scrollReveal } from '../../../services/helpers/revealText'


export default function About({ AboutComponentRef }) {

    const [showSkills, setShowSkills] = useState(true)

    const smokyPresentationRef = useRef()
    const smokyDescriptionRef = useRef()

    // const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: smokyPresentationRef.current,
    //         start: 'top-=800',
    //         toggleActions: 'play none none reverse',
    //         end: () => `+=${smokyPresentationRef.clientHeight / 2}`,
    //         markers: false
    //     }
    // });
    // tl2.fromTo(smokyPresentationRef.current,
    //     {
    //         backgroundImage: 'linear-gradient(90deg, #000, #fff, #000)',
    //         backgroundPosition: '-500%',
    //     },
    //     {
    //         backgroundImage: 'linear-gradient(90deg, #000, #fff, #000)',
    //         backgroundPosition: '500%',
    //         ease: Power2,
    //         duration: 1,
    //         delay: 0,

    //     }
    // );
    // tl2.fromTo(smokyPresentationRef.current,
    //     {
    //         backgroundPosition: '500%',
    //     },
    //     {
    //         backgroundPosition: '0',
    //         backgroundImage: 'linear-gradient(90deg, #fff, #fff, #fff)',
    //         backgroundSize: '100%%',
    //         ease: Power2,
    //         delay: 0,
    //         duration: 1
    //     }
    // );

    scrollReveal(".revealScroll p", false)
    // const tl3 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: smokyPresentationRef.current,
    //         start: 'top-=800',
    //         toggleActions: 'play none none reverse',
    //         end: () => `+=${smokyPresentationRef.clientHeight / 2}`,
    //         markers: false
    //     }
    // });
    // tl3.fromTo(smokyDescriptionRef.current,
    //     {
    //         backgroundImage: 'linear-gradient(90deg, #000, #fff, #000)',
    //         backgroundPosition: '-500%',
    //     },
    //     {
    //         backgroundPosition: '0',
    //         backgroundImage: 'linear-gradient(90deg, #fff, #fff, #fff)',
    //         backgroundSize: '100%%',
    //         ease: Power2,
    //         delay: 1.5,
    //         duration: 1
    //     }
    // );




    return (
        <section id="about" className="container-fluid" ref={AboutComponentRef}>
            <h2>À propos</h2>

            {/* <svg id="visual" className="roundedBackground" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g fill="#4478ffc5"><circle r="89" cx="692" cy="429"></circle><circle r="6" cx="437" cy="357"></circle><circle r="49" cx="192" cy="468"></circle><circle r="77" cx="251" cy="125"></circle><circle r="11" cx="456" cy="161"></circle><circle r="65" cx="634" cy="225"></circle><circle r="83" cx="771" cy="98"></circle><circle r="9" cx="93" cy="258"></circle></g></svg> */}

            <div className="container-about">
                <p id="about-presentation" ref={smokyPresentationRef}>
                    En tant que développeur Fullstack JavaScript et PHP, j'ai fait le choix de me spécialiser sur la bibliothèque ReactJS et le framework Symfony.
                    <br></br>
                    <br></br>

                    Depuis 2020, j'ai contribué à de nombreux projets, dont la création des sites web de la start-up TED consulting,
                    dans laquelle j'ai effectué mon alternance.
                    Cela m'a permis de monter rapidement en compétences afin d'être capable aujourd'hui de créer et maintenir un projet en toute autonomie :
                    <br />
                    Intégration de maquette, évolution/ maintenance de l'existant, création de base de données et de son API, mise en place d'un système de paiement...
                </p>


                <div className="hr-dotted"></div>


                <div id="about-description" ref={smokyDescriptionRef}>

                    <div className="description-choice">
                        <h3 className={`${showSkills ? "choice-active" : "choice-inactive"}`} onClick={() => setShowSkills(true)}>Mes compétences</h3>
                        <h3 className={`${showSkills ? "choice-inactive" : "choice-active"}`} onClick={() => setShowSkills(false)}>Languages et outils </h3>
                    </div>

                    <div>
                        {showSkills ?
                            <div className="revealScroll" id="skills">
                                <p>API REST </p>
                                <p>Stripe (système de paiement CB / SEPA) </p>
                                <p>Création d'espace client & admin </p>
                                <p>Listeners d’entités</p>
                                <p>Modélisation de BDD </p>
                                <p>Création de webhook</p>
                                <p>Mise en place de services </p>
                                <p>Tâches CRON </p>
                                <p>Envoies automatisés de SMS / Email </p>
                                <p>Création intégration de maquettes</p>
                            </div>
                            :
                            <div className="revealScroll" id="langage">
                                <p>Javascript </p>
                                <p>SQL / NOSQL </p>
                                <p>React </p>
                                <p>Symfony</p>
                                <p>NodeJS / Express</p>
                                <p>GSAP animation</p>
                                <p>Scss </p>
                                <p>Github </p>
                                <p>Figma </p>
                                <p>Sendinblue</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

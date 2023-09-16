import React, { useRef, useState } from 'react'



export default function About({ AboutComponentRef }) {

    const [showSkills, setShowSkills] = useState(true)

    const smokyPresentationRef = useRef()
    const smokyDescriptionRef = useRef()




    return (
        <section id="about" className="container-fluid" ref={AboutComponentRef}>
            <h2>À propos</h2>


            <div className="container-about">
                <p id="about-presentation" ref={smokyPresentationRef}>
                    En tant que développeur Fullstack <b>JavaScript</b> et <b>PHP</b>, j'ai fait le choix de me spécialiser sur la bibliothèque <b>ReactJS</b> et le framework <b>Symfony</b>.
                    <br></br>
                    <br></br>

                    Depuis 2020, j'ai contribué à de nombreux projets, dont la création des sites web de la start-up TED consulting (& Aliz),
                    dans laquelle j'ai effectué mon alternance.
                    <br/>
                    Les compétences acquises durant ces 3 années me permettent aujourd'hui de répondre tant aux problématiques techniques que clientèles, le tout dans les plus brefs délais:
    
                    <br />
                    compréhension des besoins, création / évolution d'un site web (site vitrine, e-commerce, single page, portfolio, back office... ), 
                    création de base de données et de son API, mise en place d'un système de paiement, mobile first, UX...
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
                                <p>Création / intégration de maquettes</p>
                            </div>
                            :
                            <div className="revealScroll" id="langage">
                                <p>Javascript </p>
                                <p>Typescript</p>
                                <p>Redux</p>
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

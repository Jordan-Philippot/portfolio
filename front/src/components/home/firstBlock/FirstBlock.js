import React from 'react'

// ----- Images ----- 
import Profile from '../../../images/AvatarMaker.png'

export default function FirstBlock({ firstBlockRef }) {
    return (

        <section id="home" className="container-fluid" ref={firstBlockRef} >

            <div className="content">
                <div className="blob"><img src={Profile} alt="profile" /></div>


                <div className="reveal-text">
                    <h1>
                        Salut! Je suis Jordan Philippot,
                        titulaire d'un titre de développeur - intégrateur web à Epitech,
                        concepteur d'applications web à INSTIC et développeur Fullstack.
                    </h1>
                </div>
            </div>


            {/* TEXT BACKGROUND */}
            <div className="text-background">
                <p id="text-background-react">REACT</p>
                <p id="text-background-symfony">SYMFONY</p>
            </div>


        </section >
    )
}

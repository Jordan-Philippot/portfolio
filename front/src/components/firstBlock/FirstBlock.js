import React from 'react'

// ----- Images ----- 
import Profile from '../../images/AvatarMaker.png'

export default function FirstBlock({ firstBlockRef }) {
    return (

        <section id="firstPage" className="container-fluid" ref={firstBlockRef} >

            <div className="content">
                <div className="blob"><img src={Profile} alt="profile" /></div>


                <div className="reveal-text">
                    <h1>
                        HELLO! I am Jordan Philippot,
                        titulated of web
                        developer - integrator
                        at Epitech, web
                        application CONCEPTOR
                        at INSTIC AND DEVELOPER
                        FULLSTACK
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

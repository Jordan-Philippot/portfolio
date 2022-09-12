import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

// ----- Packages -----
import { Helmet, HelmetProvider } from 'react-helmet-async';

// ----- Constant -----
import { myProjects } from '../services/constants/projects'


export default function MyProject() {
    const { id } = useParams();

    const [myProject, setMyProject] = useState([])
    const [haveProject, setHaveProject] = useState('')


    useEffect(() => {
        setMyProject(myProjects.find(project => project.id === parseInt(id)));
    }, [id])

    useEffect(() => {
        if (typeof myProject !== "undefined" && Object.keys(myProject).length > 0) {
            setHaveProject(true)
        } else {
            setHaveProject(false)
        }

        // eslint-disable-next-line
    }, [myProject])




    return (
        <HelmetProvider>
            <Helmet prioritizeSeoTags>
                <title>Jordan Philippot - Projets</title>
                <meta name="description" value="Développeur web fullstack - react symfony gsap axios stripe sass css html remote" />
                <link rel="canonical" href="https://jordanphilippot.com" />
            </Helmet>

            <div id="myProject">

                <div id="blob"></div>

                <div className="blob-container">
                    <div className="image-container">
                        {myProject?.images && myProject.images.map((image, index) =>
                            <div className="image" key={index}>
                                <img alt={image.alt} src={image.src} />
                                <img alt={image.alt} src={image.src} />
                            </div>
                        )}
                    </div>
                </div>


                {haveProject ?
                    <div className="projectInfo-container">
                        <div className="projectInfo-header">
                            <img alt={myProject?.title} src={myProject?.logo} />
                            <h1>{myProject?.title}</h1>
                        </div>
                        <div className="projectInfo-description">
                            <p>{myProject?.longDescription}</p>
                            <h3>Développement:</h3>
                            <p>{myProject?.job}</p>
                            <h3>Outils:</h3>
                            <p>{myProject?.tools}</p>
                            <h3>En vrac:</h3>
                            <p>{myProject?.other}</p>
                        </div>

                    </div>
                    :
                    <div className="projectInfo-container">
                        Aucun projet  pour l'id {id && id}
                    </div>
                }




            </div>
        </HelmetProvider>

    )
}

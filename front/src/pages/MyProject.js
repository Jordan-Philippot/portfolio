import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from "react-router-dom";

// ----- Packages -----
import { Helmet, HelmetProvider } from 'react-helmet-async';


// ----- Constant -----
import { myProjects } from '../services/constants/projects'
import { animationDirection } from '../services/constants/animationDirection'

// ----- Services -----
import { revealText } from '../services/helpers/revealText'

export default function MyProject() {
    const { id } = useParams();

    const [myProject, setMyProject] = useState([])
    const [haveProject, setHaveProject] = useState('')

    // ----- Ref -----
    const headerProjectRef = useRef()
    const firstDescriptionProjectRef = useRef()
    const firstTitleDescriptionProjectRef = useRef()
    const secondDescriptionProjectRef = useRef()
    const secondTitleDescriptionProjectRef = useRef()
    const thirdDescriptionProjectRef = useRef()
    const thirdTitleDescriptionProjectRef = useRef()
    const fourDescriptionProjectRef = useRef()
    const linkProjectRef = useRef()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

    useEffect(() => {
        if (haveProject) {
            revealText(headerProjectRef.current, animationDirection.TOLEFT, 0.1, .5)
            revealText(firstDescriptionProjectRef.current, animationDirection.TORIGHT, 0.7, .5)
            revealText(firstTitleDescriptionProjectRef.current, animationDirection.TOLEFT, 0.2, .5)
            revealText(secondDescriptionProjectRef.current, animationDirection.TORIGHT, 0.3, .5)
            revealText(secondTitleDescriptionProjectRef.current, animationDirection.TOLEFT, 0.4, .5)
            revealText(thirdDescriptionProjectRef.current, animationDirection.TORIGHT, 0.5, .5)
            revealText(thirdTitleDescriptionProjectRef.current, animationDirection.TOLEFT, 0.6, .5)
            revealText(fourDescriptionProjectRef.current, animationDirection.TORIGHT, 0.7, .5)
            revealText(linkProjectRef.current, animationDirection.TOLEFT, 0.8, .5)
        }
    }, [haveProject])


   

    // Responsive Carousel
    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 5000, min: 1300 },
    //         items: 3,
    //         slidesToSlide: 3 // optional, default to 1.
    //     },
    //     tablet: {
    //         breakpoint: { max: 1300, min: 992 },
    //         items: 2,
    //         slidesToSlide: 2 // optional, default to 1.
    //     },
    //     mobile: {
    //         breakpoint: { max: 992, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //     }
    // };


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
                    <div className={`image-container ${myProject.isMediaDesktop ? 'container-desktop' : 'container-mobile'} `}>
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
                        <div className="projectInfo-header" ref={headerProjectRef}>
                            <img alt={myProject?.title} src={myProject?.logo} />
                            <h1>{myProject?.title}</h1>
                        </div>
                        <div className="projectInfo-description">
                            <p ref={firstDescriptionProjectRef}>{myProject?.longDescription}</p>
                            <h3 ref={firstTitleDescriptionProjectRef}>Développement:</h3>
                            <p ref={secondDescriptionProjectRef}>{myProject?.job}</p>
                            <h3 ref={secondTitleDescriptionProjectRef}>Outils:</h3>
                            <p ref={thirdDescriptionProjectRef}>{myProject?.tools}</p>
                            <h3 ref={thirdTitleDescriptionProjectRef}>En vrac:</h3>
                            <p ref={fourDescriptionProjectRef}>{myProject?.other}</p>
                            <a ref={linkProjectRef} href={myProject?.link} target="_blank" rel="noopener noreferrer" className="btn-darkBlue">Visiter le site</a>
                        </div>

                    </div>
                    :
                    <div className="projectInfo-container">
                        Aucun projet  pour l'id {id && id}
                    </div>
                }

                {/* <div>
                    <Carousel
                        swipeable={false}
                        draggable={true}
                        showDots={true}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={100}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={[]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        partialVisible={true}
                        responsive={responsive}
                    >

                        <p>aaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaa</p>

                        {myProjects && myProjects.map((data, key) => {
                            return (
                                <div key={key}>
                                    <Link href={"/project/" + data.id} className="alert alert-danger">{data.title}</Link>
                                </div>
                            );
                        })}
                    </Carousel>
                </div> */}


            </div>
        </HelmetProvider >

    )
}

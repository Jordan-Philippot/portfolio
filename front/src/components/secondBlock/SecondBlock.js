import React from 'react'

// ----- Component -----
import OneProject from './OneProject'

// ----- Services -----
import { myProjects } from '../../services/constants/projects'

export default function SecondBlock({ secondBlockRef }) {


  return (
    <section id="secondPage" className="container-fluid" ref={secondBlockRef}>

      <div id="blob1"></div>
      <div id="blob2"></div>


      <h2>Mes Projets</h2>

      <div id="projectsList">
        {myProjects.map((project) =>
          <OneProject key={project.id} project={project} />
        )}
      </div>

    </section>
  )
}

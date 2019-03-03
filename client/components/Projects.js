import React from 'react'

import Home from './Home'
import SingleProject from './SingleProject'
import { projectsArr } from '../utils'

const Projects = () => {
  return (
    <div>
      <Home />
      <div id="proj-container">
        {projectsArr.map(project => (
          <SingleProject
            key={project.id}
            title={project.name}
            image={project.image}
            description={project.description}
            techArr={project.tech}
            color={project.color}
            buttonsArr={project.buttons}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects

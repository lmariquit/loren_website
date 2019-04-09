import React from 'react'

import SingleTech from './SingleTech'
import { stopwatch_project } from '../utils'
import ProjectButton from './ProjectButton'
import ProjectTitleAndContent from './ProjectTitleAndContent'

const ProjectStopwatch = () => {
  const {
    name,
    image,
    mainTech,
    otherTech,
    color,
    buttons,
    details,
    screenshots,
    logo
  } = stopwatch_project
  const { projectDesc, inspiration, howitworks, takeaways } = details
  const backgroundLogo = {
    backgroundImage: `url(${logo})`
  }
  let imgKey = 0
  return (
    <div id="proj-stopwatch">
      <div id="proj-header-stopwatch" style={color}>
        <img src={image} />
        <div className="proj-header-platform-stopwatch" />
        <div id="proj-title-stopwatch" style={backgroundLogo} />
        <div id="proj-button-container-stopwatch">
          {buttons.map(button => {
            return (
              <ProjectButton
                key={button.id}
                title={button.title}
                link={button.link}
              />
            )
          })}
        </div>
      </div>
      <div id="proj-body-stopwatch">
        <div id="proj-body-projectDesc-container-stopwatch">
          <ProjectTitleAndContent
            title={'Project Description'}
            content={projectDesc}
          />
        </div>
        <div id="proj-body-screenshots-container-stopwatch">
          {screenshots.map(image => (
            <img key={imgKey++} src={image} />
          ))}
        </div>
        <div id="proj-body-objective-container-stopwatch">
          <ProjectTitleAndContent title={'Inspiration'} content={inspiration} />
        </div>
        <div id="proj-body-tech-title" className="proj-body-title">
          Technology Used
        </div>
        <div id="proj-body-tech-container" style={color}>
          {[...mainTech, ...otherTech].map(tech => {
            return (
              <SingleTech key={tech.id} name={tech.name} image={tech.image} />
            )
          })}
        </div>
        <div id="proj-body-howitworks-container-stopwatch">
          <ProjectTitleAndContent title={'How it Works'} content={howitworks} />
        </div>
        <div id="proj-body-takeaways-container-stopwatch">
          <ProjectTitleAndContent title={'Takeaways'} content={takeaways} />
        </div>
      </div>
      <a
        className="proj-backtoprojects"
        href="/"
        style={{ textDecoration: 'none' }}
      >
        BACK TO PROJECTS
      </a>
    </div>
  )
}

export default ProjectStopwatch

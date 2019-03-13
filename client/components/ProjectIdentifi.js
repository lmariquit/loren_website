import React from 'react'

import SingleTech from './SingleTech'
import { identifi_project } from '../utils'
import ProjectButton from './ProjectButton'
import ProjectTitleAndContent from './ProjectTitleAndContent'

const ProjectIdentifi = () => {
  const {
    name,
    image,
    mainTech,
    otherTech,
    color,
    buttons,
    details,
    techScreen,
    screenshots,
    logo
  } = identifi_project
  const { projectDesc, objective, inspiration, howitworks, takeaways } = details
  const backgroundTech = {
    backgroundImage: `url(${techScreen})`
  }
  const backgroundLogo = {
    backgroundImage: `url(${logo})`
  }

  return (
    <div id="proj-identifi">
      <div id="proj-header-identifi" style={color}>
        <img src={image} />
        <div className="proj-header-platform-identifi" />
        <div id="proj-title-identifi" style={backgroundLogo} />
        <div id="proj-button-container-identifi">
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
      <div id="proj-body-identifi">
        <div id="proj-body-projectDesc-container-identifi">
          <ProjectTitleAndContent
            title={'Project Description'}
            content={projectDesc}
          />
        </div>
        <div id="proj-body-screenshots-container-identifi" style={color}>
          {screenshots.map(image => (
            <img src={image} />
          ))}
        </div>
        <div id="proj-body-objective-container-identifi">
          <ProjectTitleAndContent title={'Objective'} content={objective} />
        </div>
        <div id="proj-body-inspiration-identifi-container">
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
        <div id="proj-body-howitworks-container-identifi">
          <ProjectTitleAndContent title={'How it Works'} content={howitworks} />
        </div>
        <div id="proj-body-techstackimg-container-identifi">
          <div style={backgroundTech} />
        </div>
        <div id="proj-body-takeaways-container-identifi">
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

export default ProjectIdentifi

import React from 'react'

import SingleTech from './SingleTech'
import { flufftrainer_project } from '../utils'
import ProjectButton from './ProjectButton'
import ProjectTitleAndContent from './ProjectTitleAndContent'

const ProjectFluffTrainer = () => {
  const {
    name,
    image,
    mainTech,
    otherTech,
    color,
    buttons,
    details,
    screenshots
  } = flufftrainer_project
  const { projectDesc, objective, inspiration, howitworks, takeaways } = details
  return (
    <div id="proj-flufftrainer">
      <div id="proj-header-flufftrainer" style={color}>
        <img src={image} />
        <div className="proj-header-platform-flufftrainer" />
        <div id="proj-title-flufftrainer">{name}</div>
        <div id="proj-button-container-flufftrainer">
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
      <div id="proj-body-flufftrainer">
        <div id="proj-body-projectDesc-container-flufftrainer">
          <ProjectTitleAndContent
            title={'Project Description'}
            content={projectDesc}
          />
        </div>
        <div id="proj-body-screenshots-container-flufftrainer" style={color}>
          {screenshots.map(image => (
            <img src={image} />
          ))}
        </div>
        <div id="proj-body-objective-container-flufftrainer">
          <ProjectTitleAndContent title={'Objective'} content={objective} />
        </div>
        <div id="proj-body-inspiration-flufftrainer-container">
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
        <div id="proj-body-howitworks-container-flufftrainer">
          <ProjectTitleAndContent title={'How it Works'} content={howitworks} />
        </div>
        <div id="proj-body-takeaways-container-flufftrainer">
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

export default ProjectFluffTrainer

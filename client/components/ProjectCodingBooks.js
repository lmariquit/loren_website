import React from 'react'

import SingleTech from './SingleTech'
import { codingbooks_project } from '../utils'
import ProjectButton from './ProjectButton'
import ProjectTitleAndContent from './ProjectTitleAndContent'

const ProjectCodingBooks = () => {
  const {
    name,
    image,
    mainTech,
    otherTech,
    color,
    buttons,
    details,
    screenshots
  } = codingbooks_project
  const { projectDesc, objective, howitworks, takeaways } = details
  let imgKey = 0
  return (
    <div id="proj-codingbooks">
      <div id="proj-header-codingbooks" style={color}>
        <img src={image} />
        <div className="proj-header-platform-codingbooks" />
        <div id="proj-title-codingbooks">{name}</div>
        <div id="proj-button-container-codingbooks">
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
      <div id="proj-body-codingbooks">
        <div id="proj-body-projectDesc-container-codingbooks">
          <ProjectTitleAndContent
            title={'Project Description'}
            content={projectDesc}
          />
        </div>
        <div id="proj-body-screenshots-container-codingbooks">
          {screenshots.map(image => (
            <img key={imgKey++} src={image} />
          ))}
        </div>
        <div id="proj-body-objective-container-codingbooks">
          <ProjectTitleAndContent title={'Objective'} content={objective} />
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
        <div id="proj-body-howitworks-container-codingbooks">
          <ProjectTitleAndContent title={'How it Works'} content={howitworks} />
        </div>
        <div id="proj-body-takeaways-container-codingbooks">
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

export default ProjectCodingBooks

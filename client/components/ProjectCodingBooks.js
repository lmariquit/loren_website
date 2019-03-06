import React from 'react'

import SingleTech from './SingleTech'
import { codingbooks_project } from '../utils'
import ProjectButton from './ProjectButton'

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
  const { objective, howitworks, takeaways } = details
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
        <div id="proj-body-objective-container-codingbooks">
          <div className="proj-body-title">Objective</div>
          <div className="proj-body-content-codingbooks">{objective}</div>
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
          <div className="proj-body-title">How it Works</div>
          <div className="proj-body-content-codingbooks">{howitworks.a}</div>
          <div className="proj-body-content-codingbooks">{howitworks.b}</div>
          <div className="proj-body-content-codingbooks">{howitworks.c}</div>
        </div>
        {/* <div id="proj-body-techstackimg-container-codingbooks">
          <div style={background} />
        </div> */}
        <div id="proj-body-takeaways-container-codingbooks">
          <div className="proj-body-title">Takeaways</div>
          <div className="proj-body-content-codingbooks">{takeaways.a}</div>
          <div className="proj-body-content-codingbooks">{takeaways.b}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCodingBooks

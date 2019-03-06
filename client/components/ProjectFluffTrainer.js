import React from 'react'

import SingleTech from './SingleTech'
import { flufftrainer_project } from '../utils'
import ProjectButton from './ProjectButton'

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
  const { objective, inspiration, howitworks, takeaways } = details
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
        <div id="proj-body-objective-container-flufftrainer">
          <div className="proj-body-title">Objective</div>
          <div className="proj-body-content-flufftrainer">{objective}</div>
        </div>
        <div id="proj-body-inspiration-flufftrainer-container">
          <div className="proj-body-title">Inspiration</div>
          <div className="proj-body-content-flufftrainer">{inspiration.a}</div>
          <div className="proj-body-content-flufftrainer">{inspiration.b}</div>
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
          <div className="proj-body-title">How it Works</div>
          <div className="proj-body-content-flufftrainer">{howitworks.a}</div>
          <div className="proj-body-content-flufftrainer">{howitworks.b}</div>
        </div>
        <div id="proj-body-takeaways-container-flufftrainer">
          <div className="proj-body-title">Takeaways</div>
          <div className="proj-body-content-flufftrainer">{takeaways.a}</div>
          <div className="proj-body-content-flufftrainer">{takeaways.b}</div>
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

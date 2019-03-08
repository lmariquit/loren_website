import React from 'react'

import SingleTech from './SingleTech'
import { identifi_project } from '../utils'
import ProjectButton from './ProjectButton'

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
  const { objective, inspiration, howitworks, takeaways } = details
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
        <div id="proj-body-objective-container-identifi">
          <div className="proj-body-title">Objective</div>
          <div className="proj-body-content-identifi">{objective}</div>
        </div>
        <div id="proj-body-inspiration-identifi-container">
          <div className="proj-body-title">Inspiration</div>
          <div className="proj-body-content-identifi">{inspiration.a}</div>
          <div className="proj-body-content-identifi">{inspiration.b}</div>
          <div className="proj-body-content-identifi">{inspiration.c}</div>
          <div className="proj-body-content-identifi">{inspiration.d}</div>
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
          <div className="proj-body-title">How it Works</div>
          <div className="proj-body-content-identifi">{howitworks.a}</div>
          <div className="proj-body-content-identifi">{howitworks.b}</div>
          <div className="proj-body-content-identifi">{howitworks.c}</div>
          <div className="proj-body-content-identifi">{howitworks.d}</div>
        </div>
        <div id="proj-body-techstackimg-container-identifi">
          <div style={backgroundTech} />
        </div>
        <div id="proj-body-takeaways-container-identifi">
          <div className="proj-body-title">Takeaways</div>
          <div className="proj-body-content-identifi">{takeaways.a}</div>
          <div className="proj-body-content-identifi">{takeaways.b}</div>
          <div className="proj-body-content-identifi">{takeaways.c}</div>
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

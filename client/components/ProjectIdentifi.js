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
    screenshots
  } = identifi_project
  const {
    objective,
    inspiration_a,
    inspiration_b,
    inspiration_c,
    inspiration_d,
    howitworks_a,
    howitworks_b,
    howitworks_c,
    howitworks_d,
    takeaways_a,
    takeaways_b,
    takeaways_c
  } = details
  const background = {
    backgroundImage: `url(${techScreen})`
  }
  console.log(techScreen)
  return (
    <div id="proj-identifi">
      <div id="proj-header-identifi" style={color}>
        <img src={image} />
        <div className="proj-header-platform" />
        <div>{name}</div>
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
          <div className="proj-body-content-identifi">{inspiration_a}</div>
          <div className="proj-body-content-identifi">{inspiration_b}</div>
          <div className="proj-body-content-identifi">{inspiration_c}</div>
          <div className="proj-body-content-identifi">{inspiration_d}</div>
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
          <div className="proj-body-content-identifi">{howitworks_a}</div>
          <div className="proj-body-content-identifi">{howitworks_b}</div>
          <div className="proj-body-content-identifi">{howitworks_c}</div>
          <div className="proj-body-content-identifi">{howitworks_d}</div>
        </div>
        <div id="proj-body-techstackimg-container-identifi">
          <div style={background} />
        </div>
        <div id="proj-body-takeaways-container-identifi">
          <div className="proj-body-title">Takeaways</div>
          <div className="proj-body-content-identifi">{takeaways_a}</div>
          <div className="proj-body-content-identifi">{takeaways_b}</div>
          <div className="proj-body-content-identifi">{takeaways_c}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectIdentifi

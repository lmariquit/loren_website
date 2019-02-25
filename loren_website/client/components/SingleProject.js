import React from 'react'

import ProjectButton from './ProjectButton'

const SingleProject = ({
  title,
  image,
  description,
  techArr,
  color,
  buttonsArr
}) => {
  let techKeyIdx = 0
  return (
    <div id="proj-section-container">
      <div id="single-proj-container" style={color}>
        <div id="proj-img-container">
          <img src={image} />
        </div>
        <div id="proj-info-container">
          <div id="proj-title">{title}</div>
          <div id="proj-tech-container">
            {techArr.map(tech => {
              return (
                <div key={techKeyIdx++} className="tech-bubble">
                  {tech}
                </div>
              )
            })}
          </div>
          <div id="proj-button-container">
            {buttonsArr.map(button => {
              return <ProjectButton title={button.title} link={button.link} />
            })}
          </div>
        </div>
        <div id="proj-desc-container">
          <div id="proj-desc">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default SingleProject

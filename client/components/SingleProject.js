import React from 'react'
import { Link } from 'react-router-dom'

// import ProjectButton from './ProjectButton'

const SingleProject = ({
  title,
  image,
  description,
  techArr,
  color,
  buttonsArr,
  component
}) => {
  let techKeyIdx = 0
  let buttonKeyIdx = 0

  if (title) {
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
                    {tech.name}
                  </div>
                )
              })}
            </div>
            <div id="proj-button-container">
              <div className="proj-button">
                <Link to={component.link} style={{ textDecoration: 'none' }}>
                  <div>{component.title}</div>
                </Link>
              </div>
            </div>
          </div>
          <div id="proj-desc-container">
            <div id="proj-desc">{description}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div id="proj-section-container">
        <div
          id="single-proj-container"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0.486), rgba(0, 0, 0, 0.375)'
          }}
        >
          <div id="proj-inprogress-container">
            <div>PROJECT IN PROGRESS</div>
            <div>
              <i id="cog-icon" className="fa fa-cogs" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProject

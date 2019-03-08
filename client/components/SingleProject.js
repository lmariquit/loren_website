import React from 'react'

const SingleProject = ({
  title,
  image,
  description,
  techArr,
  color,
  buttonsArr,
  component,
  logo
}) => {
  let techKeyIdx = 0
  let buttonKeyIdx = 0

  const backgroundLogo = {
    backgroundImage: `url(${logo})`
  }

  if (title) {
    return (
      <div id="proj-section-container">
        <div id="single-proj-container" style={color}>
          <div id="proj-img-container">
            <img src={image} />
          </div>
          <div id="proj-info-container">
            {logo ? (
              <div id="proj-title-logo" style={backgroundLogo} />
            ) : (
              <div id="proj-title">{title}</div>
            )}
            <div id="proj-tech-container">
              {techArr.map(tech => {
                return (
                  <div key={techKeyIdx++} className="tech-bubble">
                    {tech.name}
                  </div>
                )
              })}
            </div>
            <div className="proj-desc-container">
              <div className="proj-desc">{description}</div>
            </div>
            <div id="proj-clickme-mobile">CLICK FOR PROJECT DETAILS</div>
          </div>
          <a
            href={component.link}
            id="proj-clickme-container"
            style={{ textDecoration: 'none' }}
          >
            <div id="proj-clickme">CLICK FOR PROJECT DETAILS</div>
          </a>
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

import React, { Fragment } from 'react'

const ProjectTitleAndContent = ({ title, content }) => {
  let key = 0
  return (
    <Fragment>
      <div className="proj-body-title">{title}</div>
      {content.map(section => {
        return (
          <div key={key++} className="proj-body-content-identifi">
            {section}
          </div>
        )
      })}
    </Fragment>
  )
}

export default ProjectTitleAndContent

import React from 'react'

const ProjectButton = ({ title, link }) => {
  return (
    <a className="proj-button" href={link} style={{ textDecoration: 'none' }}>
      {title}
    </a>
  )
}

export default ProjectButton

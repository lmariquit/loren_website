import React from 'react'
import { Link } from 'react-router-dom'

const ProjectButton = ({ title, link }) => {
  if (title === 'component') {
    return (
      <a className="proj-button" href={link} style={{ textDecoration: 'none' }}>
        <Link to={link}>{title}</Link>
      </a>
    )
  }
  return (
    <a
      className="proj-button"
      href={link}
      target="_blank"
      style={{ textDecoration: 'none' }}
    >
      {title}
    </a>
  )
}

export default ProjectButton

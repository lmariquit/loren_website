import React from 'react'
import { Link } from 'react-router-dom'

const ProjectButton = ({ title, link }) => {
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

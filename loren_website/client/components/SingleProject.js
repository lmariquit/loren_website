import React from 'react'

const SingleProject = ({ title, image, description }) => {
  return (
    <div id="single-proj-container">
      <img src={image} />
      <div id="proj-title">{title}</div>
      <div id="proj-desc">{description}</div>
    </div>
  )
}

export default SingleProject

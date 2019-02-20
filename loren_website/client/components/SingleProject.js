import React from 'react'

const SingleProject = ({ title, image, description }) => {
  return (
    <div id="single-proj-container">
      <div id="proj-img-container">
        <img src={image} />
      </div>
      <div id="proj-info-container">
        <div id="proj-title">{title}</div>
        <div id="proj-desc">{description}</div>
      </div>
    </div>
  )
}

export default SingleProject

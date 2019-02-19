import React from 'react'

const SingleProject = ({ title, image, description }) => {
  // return (
  //   <div id="single-proj-container">
  //     <img src={image} />
  //     <div id="proj-title">{title}</div>
  //     <div id="proj-desc">{description}</div>
  //   </div>
  // )
  return (
    <div id="single-proj-container">
      <div id="proj-img-container" className="one">
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
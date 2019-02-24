import React from 'react'

const SingleSkill = ({ image, skill }) => {
  const background = {
    backgroundImage: `url(${image})`
  }

  return (
    <div className="single-skill-container">
      <div className="single-skill-image" style={background} />
      <div className="single-skill">{skill}</div>
    </div>
  )
}

export default SingleSkill

import React from 'react'

const SingleTech = ({ name, image }) => {
  const background = {
    backgroundImage: `url(${image})`
  }
  return (
    <div className="single-tech-container">
      <div className="single-tech-image" style={background} />
      <div className="single-tech">{name}</div>
    </div>
  )
}

export default SingleTech

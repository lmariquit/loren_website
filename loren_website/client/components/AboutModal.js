import React from 'react'

const AboutModal = ({ modalVisibility, toggleModal }) => {
  let modalstyle
  if (modalVisibility) {
    modalstyle = {
      display: 'block',
      backgroundColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: '2'
    }
  } else {
    modalstyle = {
      display: 'none',
      zIndex: '-5'
    }
  }
  console.log('modal visibility?', modalVisibility)

  return (
    <div id="modal" style={modalstyle}>
      <div id="about-container">
        <div id="bio-close">x</div>
        <div id="bio-container">
          <div id="bio-profile-pic" />
          <div id="bio-text-container">
            <div id="about-title">About Me</div>
            <div className="bio-intro">
              I'm a software developer based in NYC
            </div>
            <div className="bio">
              Before I was a developer, I had a background in finance. Working
              at a bank, I taught myself to program in VBA and would eventually
              realize that innovation through programming was my passion. I thus
              decided to shift the direction of my career to focus on creating
              tools that provide creative solutions to problems around the
              world.
            </div>
            <div className="bio">
              What drives me toward programming are its endless possibilities.
              Software engineers around the globe are creating new and amazing
              things every day, and this inspires me to use my own creativity
              and problem-solving abilities to build programs and tools to help
              improve and advance the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutModal

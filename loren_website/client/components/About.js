import React, { Fragment } from 'react'

import Skills from './Skills'

const About = () => {
  return (
    <Fragment>
      <div id="about-container">
        <div id="bio-container">
          <div id="bio-profile-pic" />
          <div id="bio-text-container">
            <div id="bio-title">About Me</div>
            <div className="bio-intro">
              I'm a software developer based in NYC
            </div>
            <div id="bio-summary">
              <div className="bio">
                Before I was a developer, I had a background in finance. Working
                at a bank, I taught myself to program in VBA and would
                eventually realize that innovation through programming was my
                passion. I thus decided to shift the direction of my career to
                focus on creating tools that provide creative solutions to
                problems around the world.
              </div>
              <div className="bio">
                What drives me toward programming are its endless possibilities.
                Software engineers around the globe are creating new and amazing
                things every day, and this inspires me to use my own creativity
                and problem-solving abilities to build programs and tools to
                help improve and advance the world.
              </div>
            </div>
            <div id="bio-links">
              <i id="bio-icon-linkedin" className="fa fa-linkedin" />
              <i id="bio-icon-github" className="fa fa-github" />
            </div>
          </div>
        </div>
      </div>
      <div id="skills-container">
        <Skills />
      </div>
    </Fragment>
  )
}

export default About

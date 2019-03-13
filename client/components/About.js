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
                Before I was a developer, I worked in the financial industry as
                an operations associate. While working at an investment bank, I
                taught myself to program in VBA, eventually discovering that
                innovation through programming was my passion.
              </div>
              <div className="bio">
                In August 2018, I was accepted into Fullstack Academy in New
                York, where I completed a rigorous curriculum in full-stack
                Javascript and various other technologies pertinent to the tech
                industry: Node.js, React, Git, Express.js, Sequelize, and much
                more. From here, I hope to join a team as a full-stack developer
                where I can leverage both my passion and skills to continue
                innovating.
              </div>
            </div>
            <div id="bio-links">
              <a href="https://linkedin.com/in/lorenmariquit/" target="_blank">
                <i id="bio-icon-linkedin" className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/lmariquit" target="_blank">
                <i id="bio-icon-github" className="fa fa-github" />
              </a>
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

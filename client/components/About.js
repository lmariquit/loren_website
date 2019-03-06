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
                at an investment bank, I taught myself to program in VBA and
                would eventually realize that innovation through programming was
                my passion. I thus decided to shift the direction of my career
                to focus on creating tools that provide creative solutions to
                problems around the world.
              </div>
              <div className="bio">
                In August 2018, I was accepted into Fullstack Academy in New
                York and have gone through months of rigorous training in
                Javascript and various other technologies pertinent to the tech
                industry: Node.js, React, Git, GitHub, Express.js, Sequelize,
                and much more. From here, I hope to join a team as a Fullstack
                Developer where I can leverage both my passion and skills to
                continue innovating.
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

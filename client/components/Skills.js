import React, { Fragment } from 'react'
import { frontEnd, backEnd, other } from '../utils'

import SingleSkill from './SingleSkill'

const Skills = () => {
  return (
    <Fragment>
      <div id="skills-title">SKILLS</div>
      <div id="skills-tech-container">
        <div id="skills-frontend" className="skills-area-container">
          <div className="skills-area">Front End</div>
          {frontEnd.map(skill => {
            return (
              <SingleSkill
                key={skill.id}
                skill={skill.tech}
                image={skill.image}
              />
            )
          })}
        </div>
        <div id="skills-backend" className="skills-area-container">
          <div className="skills-area">Back End</div>
          {backEnd.map(skill => {
            return (
              <SingleSkill
                key={skill.id}
                skill={skill.tech}
                image={skill.image}
              />
            )
          })}
        </div>
        <div id="skills-other" className="skills-area-container">
          <div className="skills-area">Other</div>
          {other.map(skill => {
            return (
              <SingleSkill
                key={skill.id}
                skill={skill.tech}
                image={skill.image}
              />
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Skills

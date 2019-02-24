import React, { Fragment } from 'react'

import SingleSkill from './SingleSkill'

const frontEnd = [
  {
    id: 0,
    tech: 'JavaScript (ES6)',
    image: 'js_logo.png'
  },
  {
    id: 1,
    tech: 'React',
    image: 'react_logo.png'
  },
  {
    id: 2,
    tech: 'Redux',
    image: 'redux_logo.png'
  },
  {
    id: 3,
    tech: 'HTML5',
    image: 'html5_logo.png'
  },
  {
    id: 4,
    tech: 'CSS',
    image: 'css_logo.png'
  },
  {
    id: 5,
    tech: 'Semantic UI',
    image: 'semanticUI_logo.png'
  }
]

const backEnd = [
  {
    id: 0,
    tech: 'Node.JS',
    image: 'node_logo.png'
  },
  {
    id: 1,
    tech: 'Express.JS',
    image: 'express_logo.png'
  },
  {
    id: 2,
    tech: 'Sequelize',
    image: 'sequelize_logo.png'
  },
  {
    id: 3,
    tech: 'PostgreSQL',
    image: 'postgresql_logo.png'
  }
]

const other = [
  {
    id: 0,
    tech: 'Git',
    image: 'git_logo.png'
  },
  {
    id: 1,
    tech: 'GitHub',
    image: 'github_logo.png'
  },
  {
    id: 2,
    tech: 'AJAX',
    image: 'ajax_logo.png'
  },
  {
    id: 3,
    tech: 'JSON',
    image: 'json_logo.png'
  },
  {
    id: 4,
    tech: 'React-Native',
    image: 'reactnative_logo.png'
  },
  {
    id: 5,
    tech: 'WebPack',
    image: 'webpack_logo.svg'
  }
]

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

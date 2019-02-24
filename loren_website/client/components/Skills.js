import React, { Fragment } from 'react'

import SingleSkill from './SingleSkill'

const frontEnd = [
  {
    tech: 'JavaScript (ES6)',
    image: 'js_logo.png'
  },
  {
    tech: 'React',
    image: 'react_logo.png'
  },
  {
    tech: 'Redux',
    image: 'redux_logo.png'
  },
  {
    tech: 'HTML5',
    image: 'html5_logo.png'
  },
  {
    tech: 'CSS',
    image: 'css_logo.png'
  },
  {
    tech: 'Semantic UI',
    image: 'semanticUI_logo.png'
  }
]

const backEnd = [
  {
    tech: 'Node.JS',
    image: 'node_logo.png'
  },
  {
    tech: 'Express.JS',
    image: 'express_logo.png'
  },
  {
    tech: 'Sequelize',
    image: 'sequelize_logo.png'
  },
  {
    tech: 'PostgreSQL',
    image: 'postgresql_logo.png'
  }
]

const other = [
  {
    tech: 'Git',
    image: 'git_logo.png'
  },
  {
    tech: 'GitHub',
    image: 'github_logo.png'
  },
  {
    tech: 'AJAX',
    image: 'ajax_logo.png'
  },
  {
    tech: 'JSON',
    image: 'json_logo.png'
  },
  {
    tech: 'React-Native',
    image: 'reactnative_logo.png'
  },
  {
    tech: 'WebPack',
    image: 'webpack_logo.svg'
  }
]

const f = ['Git', 'GitHub', 'AJAX', 'JSON', 'React-Native', 'Webpack']

const Skills = () => {
  return (
    <Fragment>
      <div id="skills-title">SKILLS</div>
      <div id="skills-tech-container">
        <div id="skills-frontend" className="skills-area-container">
          <div className="skills-area">Front End</div>
          {frontEnd.map(skill => {
            return <SingleSkill skill={skill.tech} image={skill.image} />
          })}
        </div>
        <div id="skills-backend" className="skills-area-container">
          <div className="skills-area">Back End</div>
          {backEnd.map(skill => {
            return <SingleSkill skill={skill.tech} image={skill.image} />
          })}
        </div>
        <div id="skills-other" className="skills-area-container">
          <div className="skills-area">Other</div>
          {other.map(skill => {
            return <SingleSkill skill={skill.tech} image={skill.image} />
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Skills

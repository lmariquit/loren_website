import React, { Fragment } from 'react'

import SingleSkill from './SingleSkill'

const frontEnd = [
  {
    id: 0,
    tech: 'JavaScript (ES6)',
    image: 'https://s3.amazonaws.com/lm-portfolio/js_logo.png'
  },
  {
    id: 1,
    tech: 'React',
    image: 'https://s3.amazonaws.com/lm-portfolio/react_logo.png'
  },
  {
    id: 2,
    tech: 'Redux',
    image: 'https://s3.amazonaws.com/lm-portfolio/redux_logo.png'
  },
  {
    id: 3,
    tech: 'HTML5',
    image: 'https://s3.amazonaws.com/lm-portfolio/html5_logo.png'
  },
  {
    id: 4,
    tech: 'CSS',
    image: 'https://s3.amazonaws.com/lm-portfolio/css_logo.png'
  },
  {
    id: 5,
    tech: 'Semantic UI',
    image: 'https://s3.amazonaws.com/lm-portfolio/semanticUI_logo.png'
  }
]

const backEnd = [
  {
    id: 0,
    tech: 'Node.JS',
    image: 'https://s3.amazonaws.com/lm-portfolio/node_logo.png'
  },
  {
    id: 1,
    tech: 'Express.JS',
    image: 'https://s3.amazonaws.com/lm-portfolio/express_logo.png'
  },
  {
    id: 2,
    tech: 'Sequelize',
    image: 'https://s3.amazonaws.com/lm-portfolio/sequelize_logo.png'
  },
  {
    id: 3,
    tech: 'PostgreSQL',
    image: 'https://s3.amazonaws.com/lm-portfolio/postgresql_logo.png'
  }
]

const other = [
  {
    id: 0,
    tech: 'Git',
    image: 'https://s3.amazonaws.com/lm-portfolio/git_logo.png'
  },
  {
    id: 1,
    tech: 'GitHub',
    image: 'https://s3.amazonaws.com/lm-portfolio/github_logo.png'
  },
  {
    id: 2,
    tech: 'AJAX',
    image: 'https://s3.amazonaws.com/lm-portfolio/ajax_logo.png'
  },
  {
    id: 3,
    tech: 'JSON',
    image: 'https://s3.amazonaws.com/lm-portfolio/json_logo.png'
  },
  {
    id: 4,
    tech: 'React-Native',
    image: 'https://s3.amazonaws.com/lm-portfolio/reactnative_logo.png'
  },
  {
    id: 5,
    tech: 'WebPack',
    image: 'https://s3.amazonaws.com/lm-portfolio/webpack_logo.svg'
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

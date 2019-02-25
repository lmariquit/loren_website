import React from 'react'

const Home = () => {
  return (
    <div id="intro-container">
      <div id="intro-text">
        <div
          id="intro-first-greeting"
          className="intro"
        >{`Hi, I\'m Loren Mariquit`}</div>
        <div
          id="intro-second-greeting"
          className="intro"
        >{`I'm a Software Developer`}</div>
      </div>
      <div
        id="intro-summary"
        className="intro"
      >{`What drives me toward programming are its endless possibilities.
        Software engineers around the globe are creating new and amazing
        things every day, and this inspires me to use my own creativity
        and problem-solving abilities to build programs and tools to
        help improve and advance the world.`}</div>
    </div>
  )
}

export default Home

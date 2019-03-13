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
        id="intro-summary-one"
        className="intro"
      >{`I am inspired by the endless creative possibilities that programming provides.`}</div>
      <div
        id="intro-summary-two"
        className="intro"
      >{`As a full-stack developer, I aspire to to create programs and tools to help improve the everyday lives of people around the world.`}</div>
    </div>
  )
}

export default Home

import React from 'react'

const Home = () => {
  return (
    <div id="intro-container">
      <div className="intro">
        <div id="intro-first-greeting">{`Hi, I\'m`}</div>
        <div id="intro-name">{`Loren Mariquit`}</div>
      </div>
      <div
        id="intro-second-greeting"
        className="intro"
      >{`Welcome to my Website!`}</div>
    </div>
  )
}

export default Home

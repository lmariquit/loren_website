import React from 'react'

//IMPORT COMPONENTS
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import AboutModal from './AboutModal'

const App = () => {
  return (
    <div>
      <div id="main">
        <Home />
        <Nav />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <div id="modal">
        <AboutModal />
      </div>
    </div>
  )
}

export default App

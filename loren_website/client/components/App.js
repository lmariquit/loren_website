import React, { Component } from 'react'

//IMPORT COMPONENTS
import Nav from './Nav'
import Routes from './Routes'
import Contact from './Contact'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div id="main">
          <Nav />
          <Routes />
          <Contact />
          <Footer />
        </div>
        <div />
      </div>
    )
  }
}

export default App

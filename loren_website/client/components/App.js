import React, { Component } from 'react'

//IMPORT COMPONENTS
import Home from './Home'
import Nav from './Nav'
import Routes from './Routes'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import AboutModal from './AboutModal'

class App extends Component {
  constructor() {
    super()
    this.state = {
      modalVisibility: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    console.log('IN HERE', this.state.modalVisibility)
    if (this.state.modalVisibility) {
      this.setState({
        modalVisibility: false
      })
    } else {
      this.setState({
        modalVisibility: true
      })
    }
    console.log(this.state.modalVisibility)
  }

  render() {
    console.log(this.state.modalVisibility, 'awoeihfhiowe')
    return (
      <div>
        <div id="main">
          <Nav toggleModal={() => this.toggleModal()} />
          <Home />
          <Routes />
          <Contact />
          <Footer />
        </div>
        <div>
          <AboutModal
            modalVisibility={this.state.modalVisibility}
            toggleModal={() => this.toggleModal()}
          />
        </div>
      </div>
    )
  }
}

export default App

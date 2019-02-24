import React, { Component } from 'react'

//IMPORT COMPONENTS
import Home from './Home'
import Nav from './Nav'
import Routes from './Routes'
import Contact from './Contact'
import Footer from './Footer'

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
    return (
      <div>
        <div id="main">
          <Nav toggleModal={() => this.toggleModal()} />
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

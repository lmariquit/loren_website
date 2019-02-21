import React, { Component } from 'react'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.navUnderline = this.navUnderline.bind(this)
    this.aboutClick = this.aboutClick.bind(this)
    this.state = {
      scrollTop: 0,
      noButton: 0,
      projectsButton: 0,
      skillsButton: 0,
      contactButton: 0,
      aboutButton: 0
    }
  }

  componentDidMount() {
    this.state &&
      window.addEventListener('scroll', this.onScroll.bind(this), false)
  }

  componentDidUpdate() {
    if (
      this.state.scrollTop > 355 &&
      this.state.scrollTop < 2354 &&
      this.state.projectsButton !== 1
    ) {
      this.navUnderline('projects')
    } else if (
      this.state.scrollTop > 2354 &&
      this.state.scrollTop < 2819 &&
      this.state.skillsButton !== 1
    ) {
      this.navUnderline('skills')
    } else if (this.state.scrollTop > 2820 && this.state.contactButton !== 1) {
      this.navUnderline('contact')
    } else if (this.state.scrollTop < 355 && this.state.noButton !== 1) {
      this.navUnderline('')
    }
  }

  componentWillUnmount() {
    this.state &&
      window.removeEventListener('scroll', this.onScroll.bind(this), false)
  }

  onScroll(event) {
    this.setState({
      scrollTop: window.scrollY
    })
    // console.log(window.scrollY)
  }

  aboutClick() {
    console.log('CLIIIICKED', this.props)
    this.props.toggleModal()
    this.navUnderline('about')
  }

  navUnderline(section) {
    if (section === 'projects') {
      this.setState({
        noButton: 0,
        projectsButton: 1,
        skillsButton: 0,
        contactButton: 0,
        aboutButton: 0
      })
    } else if (section === 'skills') {
      this.setState({
        noButton: 0,
        projectsButton: 0,
        skillsButton: 1,
        contactButton: 0,
        aboutButton: 0
      })
    } else if (section === 'contact') {
      this.setState({
        noButton: 0,
        projectsButton: 0,
        skillsButton: 0,
        contactButton: 1,
        aboutButton: 0
      })
    } else if (section === 'about') {
      this.setState({
        noButton: 0,
        projectsButton: 0,
        skillsButton: 0,
        contactButton: 0,
        aboutButton: 1
      })
    } else {
      this.setState({
        noButton: 1,
        projectsButton: 0,
        skillsButton: 0,
        contactButton: 0,
        aboutButton: 0
      })
    }
  }

  render() {
    return (
      <div ref="listview" id="nav-container">
        <a id="nav-name" href="#intro-container">
          LOREN MARIQUIT
        </a>
        <a
          className={this.state.projectsButton && 'nav-selected'}
          href="#proj-container"
          onClick={() => this.navUnderline('projects')}
        >
          PROJECTS
        </a>
        <a
          className={this.state.skillsButton && 'nav-selected'}
          href="#skills-container"
          onClick={() => this.navUnderline('skills')}
        >
          SKILLS
        </a>
        <a
          className={this.state.contactButton && 'nav-selected'}
          href="#contact-container"
          onClick={() => this.navUnderline('contact')}
        >
          CONTACT
        </a>
        <div>|</div>
        <div
          className={this.state.aboutButton && 'nav-selected'}
          onClick={() => this.aboutClick()}
        >
          ABOUT
        </div>
      </div>
    )
  }
}

window.addEventListener('scroll', bringmenu)

function bringmenu() {
  // console.log(document.body.scrollTop, document.documentElement.scrollTop)
  if (document.documentElement.scrollTop < 359) {
    document.getElementById('nav-name').style.opacity = '0'
    document.getElementById('nav-container').style.boxShadow = '0 0 0'
  } else {
    document.getElementById('nav-name').style.opacity = '1'
    document.getElementById('nav-container').style.boxShadow =
      '0 10px 5px -5px rgba(128, 128, 128, 0.37)'
  }
}

export default Nav

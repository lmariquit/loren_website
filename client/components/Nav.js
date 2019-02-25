import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div ref="listview" id="nav-container">
        <a id="nav-name" href="#intro-container">
          LOREN MARIQUIT
        </a>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div id="nav-work">WORK</div>
        </Link>
        <div id="nav-break">|</div>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div id="nav-about">ABOUT</div>
        </Link>
      </div>
    )
  }
}

window.addEventListener('scroll', bringmenu)

function bringmenu() {
  if (document.documentElement.scrollTop < 359) {
    document.getElementById('nav-name').style.top = '-50px'
    document.getElementById('nav-name').style.opacity = '0'
  } else {
    document.getElementById('nav-name').style.top = '0px'
    document.getElementById('nav-name').style.opacity = '1'
  }
}

export default Nav
